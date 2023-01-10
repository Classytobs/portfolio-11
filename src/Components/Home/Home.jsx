import React, {useContext} from 'react'
import img0 from '../../Assets/img0.jpeg'

import { ThemeContext } from '../Context/Theme-context'

export default function Home() {
  const {theme, changeTheme}=useContext(ThemeContext);

  return (
    <div className=' flex flex-col bg-zinc-900 gap-y-8 justify-center content-center py-8 min-h-screen max-w-full items-center'>
      <div className='text-white p-2 cursor-pointer' onClick={changeTheme}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      </div>
      <div className='flex flex-col justify-between content-center items-center gap-y-3'>
            <div className='w-52 h-52 flex justify-center items-center cursor-pointer 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-3'>
              <img src={img0} alt='me'className='h-52 w-52 rounded-xl '/>
            </div>
          
          <div className=' flex flex-col text-white px-4 justify-between content-center items-center text-4xl font-serif text-center'>
            <div className='mb-6 font-medium'>
              <h1 className='text-5xl italic hover:not-italic font-serif'>Oluwatobi Adewumi</h1>
              <h5>Frontend Developer</h5>
            </div>
            
            <div className='border-solid border-2 border-blue-500 py-3 px-6 max-w-fit rounded-md text-2xl 
            animate-bounce hover:bg-slate-600 cursor-pointer'>
                <h3>Hire me</h3>
            </div>
            
        </div>

    </div> 
    </div> 
  )
}
