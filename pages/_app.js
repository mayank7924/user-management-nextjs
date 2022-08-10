//importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from 'react'
import Navbar from "../components/Navbar"
import { ContextProvider } from "../contexts/selectedUser"

function MyApp({ Component, pageProps }) {
    //load bootstrap javascript when DOM has painted
  useEffect(() => {
    if(document!==undefined) {
      require("bootstrap/dist/js/bootstrap")
    }
  }, [])
  return (
    <ContextProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
