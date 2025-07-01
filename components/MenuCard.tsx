import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";


const MenuCard = () => {
  return (
    <div className='bg-red-500 '>
              <div>
                <FaStar/>
              </div>
              
              <Image
                src={"/menu-momo.jpg"}
                alt="menu momo"
                height={400}
                width={400}
                className="rounded-tr-4xl rounded-tl-4xl"
              />
              <h1 className='font-syne text-2xl'>MOMO HEADING</h1>
              <p>MOMO DESC</p>
              <button className='cursor-pointer'>BUY NOW</button>
            </div>
  )
}

export default MenuCard