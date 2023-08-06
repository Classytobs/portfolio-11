import React,{useContext} from 'react'
import { ThemeContext } from '../Context/Theme-context'

export default function Dropdown({isOpen, toggle}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className= {isOpen?'show' : 'hidden'}>
    <div className={theme?'flex fixed w-full flex-col mt-20 text-center items-center h-screen font-serif text-2xl gap-y-8 pt-6 bg-black text-white':'flex fixed w-full flex-col mt-20 text-center items-center h-screen font-serif text-2xl gap-y-8 pt-6 bg-white text-black'}
          onClick={toggle}> 
          <a href="#home">Home</a> 
          <a href="#about">About</a> 
          <a href="#pr">Portfolio</a> 
          <a href="#contact">Contact</a>  
      </div>  
    </div> 
  )
}
