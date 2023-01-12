import React, {useContext} from 'react'
import img0 from '../../Assets/img0.jpeg'

import { ThemeContext } from '../Context/Theme-context'

export default function Home() {
  const {theme, changeTheme}=useContext(ThemeContext);

  return (
    <div className=' flex flex-col bg-zinc-900 gap-y-6 justify-start content-center py-8 min-h-screen max-w-full items-center'>
      <div className='text-white p-2 cursor-pointer' onClick={changeTheme}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      </div>
      <div className='flex flex-col justify-between content-center items-center gap-y-3'>
            <div className='flex justify-center items-center cursor-pointer 
            md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 w-72 h-72 duration-300 md:h-80 md:w-80 rounded-full mb-3'>
              <img src={img0} alt='me'className='h-full w-full rounded-full'/>
            </div>
          
          <div className=' flex flex-col text-white px-4 justify-between content-center items-center text-3xl font-serif text-center'>
            <div className='mb-6 font-medium'>
              <h1 className='text-4xl italic hover:not-italic font-serif'>Oluwatobi Adewumi</h1>
              <h5>{`Frontend Developer ${theme} `}</h5>
            </div>
            
            <div className='border-solid mt-6 py-3 px-6 max-w-fit rounded-md text-2xl 
            animate-bounce  bg-blue-700 hover:bg-blue-500 cursor-pointer'>
                <h3>Hire me</h3>
            </div>
            
        </div>

    </div> 
    </div> 
  )
}
