import { Flex } from '@chakra-ui/react'
import { MoonIcon, SunIcon} from "@chakra-ui/icons"
import {
    Box,
    Text,
    Input,
    Link,
    IconButton,
    useColorMode,
    InputRightAddon
} from "@chakra-ui/react"

const Toggle  = () => {
    const {colorMode, toggleColorMode} = useColorMode()

     return (
         <>
 
             <IconButton
                icon={colorMode === "light" ? <SunIcon/> : <MoonIcon/>}
                variant= "outline"
                colorScheme ="purple"
                arial-label="Color mode switcher"
                onClick={toggleColorMode}
             >
            Switch
     </IconButton>
         
         </>
     ) 
}

export default Toggle