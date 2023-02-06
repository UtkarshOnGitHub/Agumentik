import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Robot from '../assets/robot.png'
import { Link } from 'react-router-dom'
import ModalAdmin from './Modal'
import axios from 'axios'

const Hero = () => {
    const [open,setOpen] = useState(false)
    const [data,setData] = useState({})
    const [links, setLinks] = useState({})
    useEffect(()=>{
        axios.get("https://dark-hat-jay.cyclic.app/content").then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        axios.get("https://dark-hat-jay.cyclic.app/links").then((res)=>{
            console.log(res)
            setLinks(res.data)
        })
    },[])
    console.log(links)
    const handleOpenModal = ()=>{
            setOpen(true)
    }

    const closeModal = ()=>{
        setOpen(false)
    }
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
                {data[0]?.title}
            </Text>
            <Text
                color='whiteAlpha.600'
                fontSize='18px'
                w='80%'
            >
                {data[0]?.detail}
            </Text>
            <Button variant='solid' colorScheme='linkedin' borderRadius='20px' fontSize='14px'>Read More</Button>
        </VStack>

        <Image w='40%' src={Robot} transform='translate(0px, -50px)'/>
    </Flex>
    <Flex    justifyContent='center' gap={"30px"}
        alignItems='center' color={"white"} fontSize="25px" marginTop={"-70px"}>
        <Link to={links.instagram}><BsInstagram/></Link>
        <Link to={links.facebook}><BsFacebook/></Link>
        <Link to={links.linkedin}><BsLinkedin/></Link>
    </Flex>
    <Flex justifyContent={"center"} marginTop="30px">
        <Button onClick={handleOpenModal} variant='solid' colorScheme='linkedin' borderRadius='20px' fontSize='14px' margin={"auto"}>LogIn As Admin</Button>
    </Flex>
    <ModalAdmin state={open} closeModal={closeModal}/>
    </>
  )
}

export default Hero
