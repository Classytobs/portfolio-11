import React from 'react'

export default function About() {
  return (
    <div className='flex flex-row bg-zinc-900 h-screen px-36 py-5 max-w-full content-center items-start font-serif'>

        <div className='flex flex-row bg-yellow-700 h-fit px-2 py-2 rounded-l-lg hover:bg-yellow-500 mr-11'>
            <div className='mr-1'>
              <h1>About.me</h1>
            </div>
            <div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
        </div>

        <div className='bg-zinc-50 text-black rounded-r-lg text-start content-center h-fit py-5 px-10'>
            <div>
              <p className='text-4xl'>
              My name is Oluwatobi Adewumi. I'm a front-End Developer who enjoys creatively building a functional user interface.
              I'm constantly learning and keeping myself up-to-date with the latest technologies.
              </p>
            </div>
            <div className='flex flex-row mt-10 mb-10'>
              <div className='mr-12 rounded-lg border-solid border-2 border-black p-5 w-52'>
                <h1 className='text-3xl pb-3'>Skills</h1>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>PYTHON</li>
                    <li>GIT & GITHUB</li>
                  </ul>
              </div>
              <div className='rounded-lg border-solid border-2 border-black p-5 w-52'>
                <h1 className='text-3xl pb-3'>Education</h1>
                <p>B.engr Civil Engineering</p>
              </div>
              <p></p>
            </div>
        </div>
      
    </div>
  )
}
