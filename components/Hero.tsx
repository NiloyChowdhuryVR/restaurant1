"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import Nav from './Nav';

const Hero = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleOpen = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='bg-red-500'>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
    <p>HELLO</p>
    <button onClick={handleOpen}>Press</button>
    </div>
  )
}

export default Hero