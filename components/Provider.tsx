"use client"
import React, { useEffect, useState } from 'react'
import PreLoader from './PreLoader'
import Lenis from 'lenis';

const Provider = ({children}:{children:React.ReactNode}) => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{

      const lenis = new Lenis();
      function raf(time: any){
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    },[])

  return (
    <div>
        {isLoading?<PreLoader setIsLoading={setIsLoading}/>:null}
        {children}
        <h1>{isLoading?"true":"false"}</h1>
    </div>
  )
}

export default Provider