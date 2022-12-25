import React from 'react'
import img0 from '../../Assets/img0.jpeg'

export default function Home() {
  return (
    <div className='flex flex-row bg-black justify-center px-36 h-screen max-w-full items-center'>
            <div className='w-1/3 flex justify-center items-center mr-8 h-5/6'>
              <img src={img0} alt='me'className='h-5/6 w-full rounded-xl'/>
            </div>
          
        <div className='flex-col text-red-100 px-4 justify-center items-center text-4xl ml-16'>
            <div className='mb-20 font-medium leading-loose'>
              <h5 className='text-orange-400'>Welcome</h5>
              <h1>My name is <span className='text-6xl italic hover:not-italic'>Oluwatobi Adewumi</span></h1>
              <h5>Frontend Developer</h5>
            </div>
            
            <div className='bg-blue-700 py-5 px-10 max-w-fit rounded-md text-3xl hover:bg-blue-500 
            animate-bounce'>
                <h3>Hire me</h3>
            </div>
            
        </div>

    </div>  
  )
}
