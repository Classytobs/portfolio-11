import React from 'react'

export default function Dropdown({isOpen, toggle}) {
  return (
    <div className= {isOpen?'flex flex-col text-center items-center bg-black h-screen text-white font-serif text-2xl gap-y-8 pt-6' : 'hidden'}
    onClick={toggle}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#pr">Portfolio</a>
        <a href="#contact">Contact</a>   
    </div>
  )
}