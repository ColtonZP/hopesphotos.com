import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import { NavBar, Footer, PhotoView } from '../components'
import { getImagesFromFolder } from '../helpers'

const Gallery = ({ images }) => {
  const [photoViewUrl, setPhotoViewUrl] = useState('')

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
        {photoViewUrl && (
          <PhotoView
            imageUrl={photoViewUrl}
            setPhotoViewUrl={setPhotoViewUrl}
          />
        )}
        <Row>
          {images.map((image, index) => (
            <Col xs={12} sm={12} md={6} lg={3} key={image.id} className="mb-3">
              <Image
                src={image.url}
                alt="mail"
                min-width="100%"
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => setPhotoViewUrl(images[index].url)}
              />
            </Col>
          ))}
        </Row>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const images = await getImagesFromFolder('gallery')

  return {
    props: {
      images,
    },
  }
}

export default Gallery
