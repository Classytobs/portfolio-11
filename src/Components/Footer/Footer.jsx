import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"

export default function Footer() {
  return (
    <div className='flex flex-col text-center bg-slate-500 hover:bg-slate-600 min-h-32 gap-y-5 px-16 py-10 text-2xl max-w-full content-center justify-between items-center font-serif text-white'>
        <div>
            <a href="#">Classytobs</a>
        </div>
        <div className='flex flex-row items-center justify-between content-center gap-x-5'>
            <a href="#" target='blank'><FaLinkedin /></a>
            <a href="https://wa.me/08105045530" target="blank"><BsWhatsapp /></a>
            <a href="mailto:adewumitobi20@gmail.com" target="blank"><MdOutlineEmail /></a>
        </div>
        <div>
            <small>&copy; Classytobs. All rights reserved.</small>
        </div>
      
    </div>
  )
}
