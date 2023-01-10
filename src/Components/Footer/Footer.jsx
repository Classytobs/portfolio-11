import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"

export default function Footer() {
  return (
    <div className='flex flex-row bg-gray-500 hover:bg-gray-600 h-32 px-52 py-5 text-2xl max-w-full content-center justify-between items-center font-serif text-white'>
        <div>
            <a href="#">Classytobs</a>
        </div>
        <div className='flex flex-row items-center justify-between content center gap-x-5'>
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
