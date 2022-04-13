import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Box, Flex} from "@chakra-ui/react"
import ProductAddToCart from "./Card";

const cards =[

]

const Hero = () => {
  return (
        <>
      <Carousel
       infiniteLoop='true'
        showStatus="false" 
        autoPlay='true' 
        interval='1000'
        cols={2} rows={1} gap={10}
        showDots="false" >
      <ProductAddToCart/> 
      <ProductAddToCart/> 
      
      </Carousel>
  </>
  )
}

export default Hero

/*https://github.com/leandrowd/react-responsive-carousel*/