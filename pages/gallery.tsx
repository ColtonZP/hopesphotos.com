import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from 'next/head'
import { withSSRContext } from 'aws-amplify'
import { NextPage } from 'next'
import { AmplifyS3Image } from '@aws-amplify/ui-react-v1'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'
import { listPhotos } from '../src/graphql/queries'

export async function getServerSideProps() {
  const SSR = withSSRContext()

  const { data } = await SSR.API.graphql({
    query: listPhotos,
  })

  return {
    props: {
      photos: data.listPhotos.items,
    },
  }
}

const Gallery: NextPage<{ photos: any }> = ({ photos }) => {
  return (
    <>
      <Head>
        <title>Photo Gallery</title>
        <meta
          name="description"
          content="Animal photographer based in Seattle, Washington."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <NavBar />

      <main className="container">
        <Row>
          {photos.map(photo => (
            <Col xs={12} sm={12} md={6} lg={3} key={photo.key} className="mb-3">
              <AmplifyS3Image imgKey={photo.key} alt="dog" />
            </Col>
          ))}
        </Row>
      </main>

      <Footer fixed />
    </>
  )
}

export default Gallery
