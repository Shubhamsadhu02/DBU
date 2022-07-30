import 'bootstrap/dist/css/bootstrap.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import '../styles/globals.css'

library.add(fab);



function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
  );
}

export default MyApp
