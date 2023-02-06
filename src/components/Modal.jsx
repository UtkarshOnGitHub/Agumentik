import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"

export default function ModalAdmin({state,closeModal}) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
    const handleClose =()=>{
        closeModal()
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const [name, setUserName] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit= ()=>{
        if(name=="admin" && password=="admin"){
            alert("Logged In As Admin")
            closeModal()
        }else{
            alert("Wrong Creds")
        }
    }
  
    return (
      <>
        <Modal isCentered isOpen={state} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalBody>
              <Input placeholder="Enter UserName" type="text" onChange={(e)=>{setUserName(e.target.value)}}></Input>
              <Input marginTop={"20px"} type="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}></Input>
              <Button onClick={handleSubmit} marginTop={"20px"}>Log In</Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }