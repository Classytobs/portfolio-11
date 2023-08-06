import React, {useContext} from 'react'
import TOBS001 from '../../Assets/TOBS001.png'

import { ThemeContext } from '../Context/Theme-context'

export default function Home() {
  const {theme}=useContext(ThemeContext);

  return (
    <div id='home' className={theme? 'bg-slate-100 flex flex-col md:flex-row lg:flex-row text-black justify-between content-center min-h-screen max-w-full items-center px-6 md:px-16 py-16 lg:px-32 font-serif':
    'bg-slate-800 flex flex-col md:flex-row lg:flex-row text-white justify-between content-center min-h-screen max-w-full items-center px-6 md:px-16 lg:px-32 py-8 font-serif'
     }>
      <div className='flex flex-col justify-center font-serif pt-12 w-full md:w-1/2 lg:w-3/5 gap-y-4'>
            <div className='mb-8'>
              <h1 className='text-6xl font-bold tracking-wide'>Hello, I'm Oluwatobi</h1>
            </div>

            <div className='mb-8'>
              <h1 className='text-2xl mb-2 font-bold'>Frontend developer</h1>
              <h1 className='text-2xl leading-relaxed'> Experienced in web design and development, providing high-quality work. Very dedicated
              and hardworking, always working on my html, css and javascript skills</h1>
            
            </div>
            
            <div className='flex flex-row gap-x-4'>
            <div className='border-solid mt-6 p-3 max-w-fit rounded-md text-white text-2xl 
              bg-blue-700 hover:bg-blue-500 cursor-pointer'>
                <a href='#contact' >Contact me</a>
            </div>

            <div className='border-2 border-blue-500 mt-6 p-3 max-w-fit rounded-md text-black text-2xl 
              bg-slate-100 hover:bg-blue-700 hover:text-white cursor-pointer'>
                <a href='#contact' >Download CV</a>
            </div>
            
            </div>

    </div> 

    <div className='ml-8 md:w-1/2 lg:w-2/5 w:full h-full'>
              <img src={TOBS001} alt='me'className='h-full w-full'/>
            </div>
    </div> 
  )
}
