import { withSSRContext } from 'aws-amplify'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Carousel } from 'react-bootstrap'

import { AmplifyS3Image } from '@aws-amplify/ui-react-v1'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'
import { listPhotos } from '../src/graphql/queries'

export async function getServerSideProps() {
  const SSR = withSSRContext()

  const { data } = await SSR.API.graphql({
    query: listPhotos,
    variables: { filter: { key: { contains: 'homepage/' } } },
  })

  return {
    props: {
      photos: data.listPhotos.items,
    },
  }
}

const Home: NextPage<{ photos: any }> = ({ photos }) => {
  return (
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
          {!!photos.length &&
            photos.map(photo => (
              <Carousel.Item
                className="h-0"
                style={{ height: 0, minHeight: '100%' }}
                key={photo.key}>
                <AmplifyS3Image
                  imgKey={photo.key}
                  alt="dog"
                  imgProps={{ objectFit: 'cover' }}
                  className="h-100"
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </main>

      <Footer />
    </div>
  )
}

// export async function getServerSideProps() {
//   const SSR = withSSRContext({ modules: [Storage] })
//   const photos: { key: string; url: string }[] = []
//
//   // const files = Storage.list('homepage/').then(
//   //   listRes => listRes.filter(file => file.key?.match(/\.(jpg|jpeg|png)$/i)),
//   //   // .map(file =>
//   //   //   Storage.get(file.key!).then(fileRes => {
//   //   //     photos.push({
//   //   //       key: file.key!,
//   //   //       url: fileRes,
//   //   //     })
//   //   //   }),
//   //   // ),
//   // )
//
//   // const files = Storage.list('homepage/').then(listRes => listRes)
//
//   return {
//     props: {
//       photos,
//       files,
//     },
//   }
// }

export default Home
