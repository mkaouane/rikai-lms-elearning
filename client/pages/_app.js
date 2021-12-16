import TopNav from '../components/TopNav'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const notify = () => toast("Wow so easy!");

  return <>
  <ToastContainer position="bottom-right"/>
  <TopNav notification={notify}/>
  <Component {...pageProps} />
  </>
}

export default MyApp
