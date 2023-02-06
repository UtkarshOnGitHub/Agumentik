import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {IoLogoCss3} from 'react-icons/io'

const Navbar = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        m='auto'
        py={6}
        px='140px'
        bg='rgba(14,13,29, 0.3);'
        fontSize='22px'
        textTransform='uppercase'
        fontFamily='sans-serif'
        color='whiteAlpha.900'
        borderBottom='0.1px solid indigo'
    >   
        <IoLogoCss3 color='white'/>

        <Flex 
            justifyContent='space-between'
            alignItems='center'
            gap='30px'
        >
            <Text fontSize='14px'>Our Services</Text>
            <Text fontSize='14px'>Contact Us</Text>
            <Text fontSize='14px'>About Us</Text>
        </Flex>
        <SearchIcon color='white'/>
    </Flex>
  )
}

export default Navbar
