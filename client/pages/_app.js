import TopNav from '../components/TopNav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <TopNav/>
  <Component {...pageProps} />
  </>
}

export default MyApp
