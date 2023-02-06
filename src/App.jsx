import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Box className='blob' position='absolute' top='50%' left='40%'></Box>
      <Box className='blob' position='absolute' transform='rotate(30deg)' top='90%' left='10%'></Box>
      <Box className='blob' position='absolute' transform='rotate(30deg)' top='10%' left='80%'></Box>
      <Box className='blob' position='absolute' transform='rotate(30deg)' top='20%' left='10%'></Box>
    </div>
  )
}

export default App
