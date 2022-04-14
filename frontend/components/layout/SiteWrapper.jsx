import { Box, Flex, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Navbar";

const SiteWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        px={{ base: "8", md: "12" }}
        minH="100vh"

        //   maxW={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default SiteWrapper;
