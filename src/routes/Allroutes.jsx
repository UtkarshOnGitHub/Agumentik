import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../components/Admin'
import Hero from '../components/Hero'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
        </Routes>
  )
}

export default Allroutes
