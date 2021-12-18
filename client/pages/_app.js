import TopNav from '../components/TopNav'
import { Provider } from '../context';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const notify = () => toast("Wow so easy!");

  return <>
  <Provider>
    <ToastContainer position="bottom-right"/>
    <TopNav notification={notify}/>
    <Component {...pageProps} />
  </Provider>
  </>
}

export default MyApp
