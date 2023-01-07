import React from 'react'
import {useState} from 'react'

export default function Navbar() {

    const [activeNav, setActiveNav] = useState('#')
    
  return (
    <div className='relative'>
    <div className='flex flex-row content-center items-center justify-center fixed inset-x-1/2 inset-y-full'>
    <div className='flex flex-row text-white mb-12 h-fit w-fit justify-between gap-x-8 rounded-lg border-solid border-2 border-blue-500 items-center content-center bg-zinc-900 shadow-md p-2'>
      <a href="#" title="Home" onClick={() => setActiveNav('#')}   className={activeNav === '#' ? 'active' : ''}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </a>
      <a href="#about" title="About Me" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      </a>
      <a href="#projects" title="Projects" onClick={() => setActiveNav('#projects')}  className={activeNav === '#projects' ? 'active' : ''}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </a>
      <a href="#contact" title="Contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </a>
    </div>
    </div>
    </div>
  )
}
