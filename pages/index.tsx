import Head from 'next/head'
import Image from 'next/image'

import { Carousel } from 'react-bootstrap'

import { NavBar, Footer } from '../components'
import { getImagesFromFolder } from '../helpers'

const Home = ({ images }) => (
  <div className="vh-100 d-flex flex-column">
    <Head>
      <title>Hope&apos;s Photos</title>
      <meta
        name="description"
        content="Animal photographer based in Seattle, Washington."
      />
      {/* <link rel="icon" href="/favicon.ico" /> */}
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
        {images?.map(image => (
          <Carousel.Item
            className="h-0"
            style={{ height: 0, minHeight: '100%' }}
            key={image.id}>
            <Image src={image.url} alt="mail" layout="fill" objectFit="cover" />
          </Carousel.Item>
        ))}
      </Carousel>
    </main>

    <Footer />
  </div>
)

export async function getStaticProps() {
  const images = await getImagesFromFolder('homepage')

  return {
    props: {
      images,
    },
  }
}

export default Home
