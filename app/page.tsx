import Hero from '@/components/Hero'
import React from 'react'
import Slider from "@/components/Slider"
import BigImage from '@/components/BigImage'
import AboutUs from '@/components/AboutUs'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className=''>
    <Hero/>
    <Slider/>
    <BigImage/>
    <AboutUs/>
    <Menu/>
    <Footer/>
    </div>
  )
}

export default page