import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <Head>
        <title>Hope&apos;s Photos</title>
        <meta
          name="description"
          content="Animal photographer based in Seattle, Washington."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="container flex-grow-1 d-flex flex-column">
        <h1 className="mb-4 text-center">
          Photographer based in Seattle, Washington.
        </h1>

        <Carousel
          controls={false}
          indicators={false}
          fade
          className="carousel slide flex-grow-1">
          <Carousel.Item className="h-100">
            <Image
              src="/doggo.jpeg"
              alt="mail"
              layout="fill"
              objectFit="cover"
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src="/doggo2.jpeg"
              alt="mail"
              layout="fill"
              objectFit="cover"
            />
          </Carousel.Item>
        </Carousel>

        {/* <div */}
        {/*  id="carouselExampleSlidesOnly" */}
        {/*  className="carousel slide flex-grow-1 py-2" */}
        {/*  data-bs-ride="carousel"> */}
        {/*  <div className="carousel-inner h-100"> */}
        {/*    <div className="carousel-item active  h-100"> */}
        {/*      <Image */}
        {/*        src="/doggo.jpeg" */}
        {/*        alt="mail" */}
        {/*        layout="fill" */}
        {/*        objectFit="cover" */}
        {/*      /> */}
        {/*      /!* <Image src="/doggo.jpeg" alt="mail" width={100} height={100} /> *!/ */}
        {/*    </div> */}
        {/*    <div className="carousel-item  h-100"> */}
        {/*      <Image */}
        {/*        src="/doggo2.jpeg" */}
        {/*        alt="mail" */}
        {/*        layout="fill" */}
        {/*        objectFit="cover" */}
        {/*      /> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}
      </main>

      <Footer />
    </div>
  )
}

export default Home
