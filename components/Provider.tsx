"use client"
import React, { useState } from 'react'
import PreLoader from './PreLoader'

const Provider = ({children}:{children:React.ReactNode}) => {
    const [isLoading,setIsLoading] = useState(true);
  return (
    <div>
        {isLoading?<PreLoader setIsLoading={setIsLoading}/>:null}
        {children}
        <h1>{isLoading?"true":"false"}</h1>
    </div>
  )
}

export default Provider