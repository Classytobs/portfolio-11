import React from 'react'
import img0 from '../../Assets/img0.jpeg'
import github from '../../Assets/github.png'
import twitter from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkedin.png'

export default function Home() {
  return (
    <div className='flex flex-row bg-zinc-900 justify-center px-36 min-h-screen max-w-full items-center'>
            <div className='w-1/3 flex justify-center items-center mr-8 h-5/6
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <img src={img0} alt='me'className='h-5/6 w-full rounded-xl '/>
            </div>
          
        <div className='flex-col text-red-100 px-4 justify-center items-center text-4xl ml-16 font-serif'>
            <div className='mb-20 font-medium leading-loose'>
              <h1 className='text-6xl italic hover:not-italic font-serif'>Oluwatobi Adewumi</h1>
              <h5>Frontend Developer</h5>
            </div>
            
            <div className='border-solid border-2 border-blue-500 py-5 px-10 max-w-fit rounded-md text-3xl 
            animate-bounce hover:bg-blue-500'>
                <h3>Hire me</h3>
            </div>

            <div className='flex flex-row justify-start mt-10 space-x-11'>
              <img src={linkedin} alt='linkedin' className='border-solid border-2 border-blue-500 p-3 rounded-full hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={twitter} alt='twitter' className='border-solid border-2 border-blue-500 p-3 rounded-full hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={github} alt='github' className='border-solid border-2 border-blue-500 p-3 rounded-full  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
            </div>
            
        </div>

    </div>  
  )
}
