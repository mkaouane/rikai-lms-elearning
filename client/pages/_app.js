import { Provider } from '../context';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/globals.css'
import Home from '.';

function MyApp({ Component, pageProps }) {

  return <>
  <Provider>
    <ToastContainer position="bottom-right"/>
    <Component {...pageProps} />
  </Provider>
  </>
}

export default MyApp
