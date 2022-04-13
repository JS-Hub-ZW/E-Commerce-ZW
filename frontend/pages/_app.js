import '../styles/globals.css'
import {ChakraProvider, Box} from "@chakra-ui/react"
import Header from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <Header/>
      
       <Component {...pageProps} />
      
      <Footer/>
       {/*footer to go here */}
    </ChakraProvider>

  )
}

export default MyApp

