import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import React,{useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (<>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
 </Head>
 
 <Component {...pageProps} />
 </>)
}

export default MyApp
