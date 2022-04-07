import {
    Box,
    Flex,
    Text,
    Input,
    Link,
    InputGroup,
    InputRightAddon
} from "@chakra-ui/react"
// import Link from 'next/link'

export default function Header() {
    return (
        <Box
            as='header'
            backgroundColor='#1D1D1D'
            color='#6E7976' px='8' py='4'
        >
            <Flex
                alignItems="center"
                gap='2'
                boxShadow='dark-lg' p='6' rounded='md' bg='red'
                py='2'
                backgroundColor='#1D1D1D'
            >
                <Text fontSize='xs'>+021-95-51-84</Text>
                <Text fontSize='xs'>email@email.com</Text>
                <Text fontSize='xs'>1734 Stonecoal Road </Text>
            </Flex>
            <Flex justifyContent='space-between' alignItems='center' py='4'>
                <Text color="#5452FF" fontSize='md'>Ecommerce ZW</Text>

                <InputGroup size='sm' maxW='2xl' >
                    <Input placeholder='Search' variant='filled' />
                    <InputRightAddon children='Search' as='button' color='#fff'
                        bg="#5452FF" border='none' />
                </InputGroup>
                {/*<Flex alignItems='center'>
                <Input maxW='2xl' bg="#fff" placeholder='Search' size='sm' borderColor='none'/>
                <Button 
                size='sm' 
                color='#5452FF' 
                borderColor='#5452FF' 
                borderRadius={0} 
                variant="outline"
                >
                Search
                </Button>
            </Flex>*/}
                <p>icons</p>
            </Flex>
            <Flex py='2' alignItem='center' gap='4' justifyContent='center' as='nav'>
                <Link href='/' _hover={{ color: "#5452FF" }}>Home</Link>
                <Link href='/' _hover={{ color: "#5452FF" }}>Hot Deals</Link>
                <Link href='/' _hover={{ color: "#5452FF" }}>Categories</Link>
                <Link href='/' _hover={{ color: "#5452FF" }}>Accessories</Link>
                <Link href='/' _hover={{ color: "#5452FF" }}>Laptop</Link>
            </Flex>
        </Box>
    )

} 
