"use client"
import React, { useRef } from 'react'
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const navRef = useRef<HTMLDivElement>(null);

        useGSAP(() => {
  gsap.from(navRef.current, {
    y: -100,
    duration: 1,
    delay: 0.8,
  });
});

  return (
    <div ref={navRef} className='w-full flex justify-center py-5'>

    <div className='flex justify-between items-center w-[90%] '>
        <Image src="/wowmomo.jpeg" alt='Logo' height={40} width={40} className='rounded-xl cursor-pointer '/>
        <h1 className='text-5xl font-dongpora text-white hidden md:block cursor-default'>WOW MOMO!</h1>
        <div className='flex justify-center items-center gap-5'>
        <Menu onClick={()=>setIsOpen(!isOpen)} size={30} className='text-white cursor-pointer'/>
        <ShoppingCart size={30} className='text-white cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}

export default Nav