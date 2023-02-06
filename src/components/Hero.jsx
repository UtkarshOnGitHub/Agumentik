import { Button, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Robot from '../assets/robot.png'

const Hero = () => {
  return (
    <>
    <Flex
        justifyContent='space-between'
        w='80%'
        m='auto'
        alignItems='center'
        mt='100px'
    >
        <VStack 
            w='40%'
            alignItems='flex-start'
            spacing={8}
            transform='translate(0px, -50px)'
        >
            <Text 
                fontSize='52px'
                fontWeight='bold' 
                color='white'   
                lineHeight='65px'
            >
                We Help Businesses Just Like Yours Grow Revenue
            </Text>
            <Text
                color='whiteAlpha.600'
                fontSize='18px'
                w='80%'
            >
                Increased online visibilities ensures you are seen by potential customers interested in your products & services.
            </Text>
            <Button variant='solid' colorScheme='linkedin' borderRadius='20px' fontSize='14px'>Read More</Button>
        </VStack>

        <Image w='40%' src={Robot} transform='translate(0px, -50px)'/>
    </Flex>
    <Flex    justifyContent='center' gap={"30px"}
        alignItems='center' color={"white"} fontSize="25px" marginTop={"-70px"}>
        <BsInstagram/>
        <BsFacebook/>
        <BsLinkedin/>
    </Flex>
    <Flex justifyContent={"center"} marginTop="30px">
        <Button variant='solid' colorScheme='linkedin' borderRadius='20px' fontSize='14px' margin={"auto"}>LogIn As Admin</Button>
    </Flex>

    
    </>
  )
}

export default Hero
