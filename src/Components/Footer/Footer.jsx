import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-row bg-gray-500 h-20 px-36 py-5 max-w-full content-center justify-between items-center font-serif text-white'>
        <div>
            <a href="#">Classytobs</a>
        </div>
        <div>
            <a href="#" target='blank'>Linkedin</a>
            <a href="https://wa.me/08105045530" target="blank">Whatsapp</a>
            <a href="mailto:adewumitobi20@gmail.com" target="blank">Email</a>
        </div>
        <div>
            <small>&copy; Classytobs. All rights reserved.</small>
        </div>
      
    </div>
  )
}
