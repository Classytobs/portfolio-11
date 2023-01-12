import React from 'react'
import github from '../../Assets/github.png'
import twitter from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkedin.png'
import html from '../../Assets/html.svg'
import bootstrap from '../../Assets/bootstrap.svg'
import css from '../../Assets/css.svg'
import github2 from '../../Assets/github2.svg'
import js from '../../Assets/js.svg'
import react from '../../Assets/react.svg'
import tailwind from '../../Assets/tailwind.svg'
import git from '../../Assets/git.svg'
import py from '../../Assets/py.png'

export default function About() {
  return (
    <div className='flex flex-col bg-zinc-900 min-h-screen px-12 md:px-72 py-5 max-w-full justify-between gap-y-8 content-center items-center font-serif text-white'>

        <div className='flex flex-row cursor-pointer justify-center content-center items-center  bg-blue-700 hover:bg-blue-500 shadow-md h-fit px-5  py-3 rounded-lg text-3xl text-center'>
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
              <p className='text-2xl'>
              My name is Oluwatobi Adewumi. I'm a front-End Developer who enjoys creatively building a functional user interface.
              I'm constantly learning and keeping myself up-to-date with the latest technologies.
              </p>
            </div>
            <div className='flex flex-row cursor-pointer justify-between space-x-11'>
              
              <img src={twitter} alt='twitter' className='border-solid border-2 border-white p-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={linkedin} alt='linkedin' className='border-solid border-2 border-white p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <img src={github} alt='github' className='border-solid border-2 border-white p-2 rounded-full  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
            </div>

            <div className='flex flex-col gap-y-8 mt-10 mb-10 text-center w-72'>
              <div className='rounded-lg cursor-pointer bg-slate-500 hover:bg-slate-600 divide-y divide-slate-400 shadow-md w-66 h-66 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-6'>
                <h1 className='text-3xl p-3'>Skills</h1>
                  <ul className="space-y-3 pt-2 text-sm ">
                    <li className='flex flex-row content-center items-center justify-between'>HTML <img src={html} alt='html' className='h-8 w-12 '/> </li>
                    <li className='flex flex-row content-center items-center justify-between'>CSS <img src={css} alt='css' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>TAILWIND <img src={tailwind} alt='tailwind' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>BOOTSTRAP <img src={bootstrap} alt='html' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>JAVASCRIPT <img src={js} alt='html' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>REACT <img src={react} alt='html' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>PYTHON <img src={py} alt='html' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>GIT <img src={git} alt='html' className='h-8 w-12 '/></li>
                    <li className='flex flex-row content-center items-center justify-between'>GITHUB <img src={github2} alt='html' className='h-8 w-12 '/></li>
                  </ul>
              </div>
              <div className='rounded-lg divide-y cursor-pointer divide-slate-400 bg-slate-500 hover:bg-slate-600 shadow-md w-66 h-66 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-6'>
                <h1 className='text-3xl p-3'>Education</h1>
                  <ul className="space-y-3 pt-2 text-sm">
                    <li>B.ENGR CIVIL ENGINEERING</li>
                  </ul>
              </div>
            </div>
            
        </div>
      
    </div>
  )
}
