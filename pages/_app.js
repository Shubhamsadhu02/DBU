import 'bootstrap/dist/css/bootstrap.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
import Footer from '../src/components/Footer'

import '../styles/globals.css'
import { useRouter } from 'next/router'
import Head from 'next/head'

library.add(fab);



function MyApp({ Component, pageProps }) {
 
  const router = useRouter();

  const showNav= router.pathname === "/contact";
  console.log(showNav);

  return (
  <>
            <Head>
                <link rel="shortcut icon" href="/images/dblogo.svg" />
                <title>DBU | Projects</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
    <Component {...pageProps} />

    <Footer showNav={!showNav}/>
  </>
  );
}

export default MyApp
