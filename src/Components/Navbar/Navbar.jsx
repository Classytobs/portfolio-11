import React from 'react'
import { AiOutlineBars } from "react-icons/ai";

export default function Navbar() {
    
  return (
    <div className='relative'>
    <div className='flex flex-row justify-between items-center content-center p-8 md:px-32 bg-zinc-900 text-white text-2xl font-serif'>
      <div className='text-4xl' >
        <h1>Classytobs</h1>
      </div>

      <div className='flex flex-col gap-y-5 md:flex md:flex-row md:items-center md:gap-x-5 hidden md:block'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#pr">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className='md:hidden'>
        <AiOutlineBars/>
      </div>

      </div>

    </div>
    
  )
}
