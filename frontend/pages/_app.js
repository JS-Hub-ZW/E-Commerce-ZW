import '../styles/globals.css'
import {ChakraProvider,extendTheme, Box} from "@chakra-ui/react"
import Header from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


const theme = extendTheme ({
  colors: {
    purples: {
      50: "#5452FF"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider  theme={theme}>
      <Header/>
      
       <Component {...pageProps} />
      
      <Footer/>
       {/*footer to go here */}
    </ChakraProvider>

  )
}

export default MyApp

