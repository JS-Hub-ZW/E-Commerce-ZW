import { Box, Flex, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Navbar";

const SiteWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        px={{ base: "2", md: "4" }}
        minH="100vh"
        py={4}

        //   maxW={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        <Box mx="auto">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};

export default SiteWrapper;
