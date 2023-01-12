import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import linkedin3 from '../../Assets/linkedin3.png'
import WhatsApp2 from '../../Assets/WhatsApp2.svg'
import gmail2 from '../../Assets/gmail2.png'


export default function Footer() {
  return (
    <div className='flex flex-col text-center bg-slate-500 hover:bg-slate-600 min-h-32 gap-y-5 px-16 py-10 text-2xl max-w-full content-center justify-between items-center font-serif text-white'>
        <div>
            <a href="home">Classytobs</a>
        </div>
        <div className='flex flex-row gap-x-5 items-center justify-between content-center'>
            <a href="https://linkedin.com/in/oluwatobi-adewumi-879548213" target='blank'><img src={linkedin3} alt='linkedin2' className='h-6 w-16 '/></a>
            <a href="https://wa.me/8105045530" target="blank"><img src={WhatsApp2} alt='whatsapp2' className='h-6 w-8 '/></a>
            <a href="mailto:adewumitobi20@gmail.com" target="blank"><img src={gmail2} alt='gmail2' className='h-5 w-6 '/></a>
        </div>
        <div>
            <small>&copy; Classytobs. All rights reserved.</small>
        </div>
      
    </div>
  )
}
