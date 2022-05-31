import React, { useEffect, useState } from 'react'
import { API, graphqlOperation, Storage, withSSRContext } from 'aws-amplify'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Head from 'next/head'
import { Authenticator } from '@aws-amplify/ui-react'
import { Observable } from 'zen-observable-ts'
import { NextPage } from 'next'
import { AmplifyS3Image } from '@aws-amplify/ui-react-v1'
import { NavBar } from '../components/Navbar'
import '@aws-amplify/ui-react/styles.css'
import { createPhoto, deletePhoto } from '../src/graphql/mutations'
import { listPhotos } from '../src/graphql/queries'
import { onCreatePhoto, onDeletePhoto } from '../src/graphql/subscriptions'

type FormData = {
  photos: {
    files: FileList
  }
  isHomepage: { checked: boolean }
}

export async function getServerSideProps() {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listPhotos })

  return {
    props: {
      photosQuery: data.listPhotos.items,
    },
  }
}

const Admin: NextPage<{ photosQuery: any }> = ({ photosQuery }) => {
  const [validated, setValidated] = useState(false)
  const [photosData, setPhotosData] = useState(photosQuery)

  useEffect(() => {
    const createPhotoSubscription = (
      API.graphql(graphqlOperation(onCreatePhoto)) as Observable<any>
    ).subscribe({
      next: newPhoto => {
        setPhotosData(prev => [...prev, newPhoto.value.data.onCreatePhoto])
      },
    })

    return () => createPhotoSubscription.unsubscribe()
  }, [])

  useEffect(() => {
    const deletePhotoSubscription = (
      API.graphql(graphqlOperation(onDeletePhoto)) as Observable<any>
    ).subscribe({
      next: deletedPhoto => {
        setPhotosData(prev =>
          prev.filter(
            photo => photo.id !== deletedPhoto.value.data.onDeletePhoto.id,
          ),
        )
      },
    })

    return () => deletePhotoSubscription.unsubscribe()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { photos, isHomepage } = e.target as typeof e.target & FormData

    Object.values(photos.files).forEach(async photo => {
      const key = `${isHomepage.checked ? 'homepage' : 'gallery'}/${photo.name}`

      await Storage.put(key, photo)

      await API.graphql({
        query: createPhoto,
        variables: {
          input: {
            key,
          },
        },
      })
    })
  }

  const handleDelete = async (photo: any) => {
    await API.graphql({
      query: deletePhoto,
      variables: {
        input: {
          id: photo.id,
        },
      },
    })

    await Storage.remove(photo.key)
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta
          name="description"
          content="Animal photographer based in Seattle, Washington."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <NavBar />

      <main className="container flex-grow-1 d-flex flex-column">
        <Authenticator>
          {({ signOut }) => (
            <>
              <h1>Admin Panel</h1>

              <Form
                className="my-5"
                validated={validated}
                onSubmit={handleSubmit}>
                <Form.Label>Upload Photos</Form.Label>

                <Form.Group className="mb-3" controlId="isHomepage">
                  <Form.Check
                    name="isHomepage"
                    type="checkbox"
                    label="Homepage"
                  />
                </Form.Group>

                <Form.Group controlId="homepage-photos">
                  <Form.Control
                    name="photos"
                    type="file"
                    accept="image/png, image/jpeg"
                    className="my-3"
                    multiple
                    required
                  />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                  Upload
                </Button>
              </Form>

              <Row xs={1} sm={1} md={6} lg={12} className="mb-5">
                {photosData.map(photo => (
                  <Col key={photo.key} className="mb-3">
                    <Card>
                      <AmplifyS3Image imgKey={photo.key} alt="dog" />
                      <Card.Body>
                        <Card.Title
                          className={
                            photo.key.match('homepage')
                              ? 'text-success'
                              : 'text-info'
                          }>
                          {photo.key.match('homepage') ? 'homepage' : 'gallery'}
                        </Card.Title>
                        <Card.Text>{photo.id}</Card.Text>
                        <Card.Text>{photo.key}</Card.Text>
                        <Button
                          variant="danger"
                          className="w-100"
                          onClick={() => handleDelete(photo)}>
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Button variant="danger" type="button" onClick={signOut}>
                Sign out
              </Button>
            </>
          )}
        </Authenticator>
      </main>
    </>
  )
}

export default Admin
