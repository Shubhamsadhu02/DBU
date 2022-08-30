import 'bootstrap/dist/css/bootstrap.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import '../styles/globals.css'
import { useRouter } from 'next/router'

library.add(fab);



function MyApp({ Component, pageProps }) {
 
  const router = useRouter();

  const showNav= router.pathname === "/contact";
  console.log(showNav);

  return (
  <>
    <Component {...pageProps} />

    <Footer showNav={!showNav}/>
  </>
  );
}

export default MyApp
