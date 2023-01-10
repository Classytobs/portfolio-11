import React from 'react'
import github from '../../Assets/github.png'
import twitter from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkedin.png'

export default function About() {
  return (
    <div className='flex flex-col bg-zinc-900 min-h-screen px-52 py-8 max-w-full justify-between gap-y-8 content-center items-center font-serif text-white'>

        <div className='flex flex-row cursor-pointer justify-center content-center items-center bg-yellow-700 shadow-md h-fit px-5 py-3 rounded-lg hover:bg-yellow-800 text-4xl'>
            <div className='mr-5'>
              <h1>About me</h1>
            </div>
            <div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"></path>
            </svg>
            </div>
        </div>

        <div className='flex flex-col text-center items-center justify-between gap-y-5 content-center'>
            <div>
              <p className='text-4xl'>
              My name is Oluwatobi Adewumi. I'm a front-End Developer who enjoys creatively building a functional user interface.
              I'm constantly learning and keeping myself up-to-date with the latest technologies.
              </p>
            </div>
            <div className='flex flex-row cursor-pointer justify-between space-x-11'>
              <img src={linkedin} alt='linkedin' className='border-solid border-2 border-blue-500 p-2 rounded-full bg-slate-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={twitter} alt='twitter' className='border-solid border-2 border-blue-500 p-2 rounded-full bg-slate-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={github} alt='github' className='border-solid border-2 border-blue-500 p-2 rounded-full  bg-slate-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
            </div>
            <div className='flex flex-col gap-y-8 mt-10 mb-10 text-start'>
              <div className='rounded-full cursor-pointer border-solid border-2 border-blue-500 bg-slate-500 hover:bg-slate-600 divide-y divide-slate-400 shadow-md w-52 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-6'>
                <h1 className='text-3xl p-3'>Skills</h1>
                  <ul className="marker:text-blue-500 list-disc pl-8 space-y-3 pt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>PYTHON</li>
                    <li>GIT & GITHUB</li>
                  </ul>
              </div>
              <div className='rounded-full divide-y cursor-pointer divide-slate-400 bg-slate-500 hover:bg-slate-600 border-solid border-2 border-blue-500 shadow-md w-52 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-6'>
                <h1 className='text-3xl p-3'>Education</h1>
                  <ul className="marker:text-blue-500 list-disc pl-8 space-y-3 pt-2">
                    <li>B.engr Civil Engineering</li>
                  </ul>
              </div>
            </div>
            
        </div>
      
    </div>
  )
}
