import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Head from 'next/head'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'

const Gallery = () => {
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

      <main className="container flex-grow-1 d-flex flex-column">
        <Container>
          <Row xs={1} sm={1} md={4} lg={8}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24,
            ].map(num => (
              <Col key={num}>{num}</Col>
            ))}
          </Row>
        </Container>
      </main>

      <Footer fixed />
    </>
  )
}

export default Gallery
