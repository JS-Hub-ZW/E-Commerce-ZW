import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    AspectRatio,
    Image,
  } from '@chakra-ui/react'
const Section = () => {
     return (
         <>
        <Flex p="4" m="6" alignItems='center' >
        <Image src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='first' objectFit='cover' width='600px' />
        <Image src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='first' objectFit='cover' width='600px' />
        </Flex>

        <h2>Categories</h2>
        </>
     )
}

export default Section;