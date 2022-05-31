import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/bootswatch.css'
import type { AppProps } from 'next/app'

import Amplify from 'aws-amplify'
import awsmobile from '../aws-exports'

Amplify.configure({ ...awsmobile, ssr: true })

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
