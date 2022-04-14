import "../styles/globals.css";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Header from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SiteWrapper from "../components/layout/SiteWrapper";

const theme = extendTheme({
  colors: {
    purples: {
      50: "#5452FF",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SiteWrapper>
        <Component {...pageProps} />
      </SiteWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
