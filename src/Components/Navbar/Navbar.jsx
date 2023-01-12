import React from 'react'
import { AiOutlineBars } from "react-icons/ai";

export default function Navbar({toggle}) {
    
  return (
    <div className='relative'>
    <div className='flex flex-row fixed w-full justify-between items-center content-center px-8 py-5 md:px-32 bg-zinc-900 text-white text-2xl font-serif'>
      <div className='text-4xl cursor-pointer' >
      <a href="#home">Classytobs</a>
      </div>

      <div className='flex flex-col gap-y-5 md:flex md:flex-row md:items-center md:gap-x-5 hidden md:block'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#pr">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className='md:hidden cursor-pointer' onClick={toggle}>
        <AiOutlineBars/>
      </div>

      </div>

    </div>
    
  )
}
