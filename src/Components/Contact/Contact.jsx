import React,{useContext} from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import { ThemeContext } from '../Context/Theme-context'

export default function Contact() {
    const {theme, changeTheme}=useContext(ThemeContext);

  return (
    <div id='contact' className={theme?'flex flex-col bg-zinc-900 gap-y-8 min-h-screen px-12 md:px-72 py-16 max-w-full justify-between content-center items-center font-serif text-white':
    'flex flex-col gap-y-8 min-h-screen px-12 md:px-72 py-16 max-w-full justify-between content-center items-center font-serif text-black'}>
        
        <div className='flex flex-row mt-24 cursor-pointer justify-center content-center items-center  bg-blue-700 hover:bg-blue-500 shadow-md h-fit px-5 py-3 rounded-lg text-3xl text-center'>
            <div>
                <h1 className='mr-5'>Get in Touch</h1>
            </div>
            <div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"></path>
                </svg>
            </div>            
        </div>

        <div className='flex flex-col gap-y-8 justify-between content-center items-center'>

            <div className='text-center'>
                <p className='text-2xl'>Are you ready? Contact me so we can create something truly spectacular! </p>
            </div>

            <div className='flex flex-col content-center justify-center gap-y-4 md:flex-row md:gap-x-10 w-72 md:w-full'>
                    
                    <div className='p-4 cursor-pointer flex flex-col items-center justify-between content-center gap-y-2 p-3 rounded-lg bg-slate-500 hover:bg-slate-600'>
                        <h4 className='flex flex-row items-center gap-x-2'> <FaLinkedin /> LinkedIn</h4>
                        <h5>Oluwatobi Adewumi</h5>
                        <a href="https://linkedin.com/in/oluwatobi-adewumi-879548213" taget="blank" className='bg-blue-700 text-center shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                    </div>
                    <div className='p-4 cursor-pointer flex flex-col items-center justify-between content-center gap-y-2 p-3 rounded-lg bg-slate-500 hover:bg-slate-600'>
                        <h4 className='flex flex-row items-center gap-x-2'><MdOutlineEmail /> Email </h4>
                         <h5>adewumitobi20@gmail.com</h5> 
                        <a href="mailto:adewumitobi20@gmail.com" target="blank"className='bg-blue-700 text-center shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                    </div>
                    <div className='p-4 cursor-pointer flex flex-col items-center justify-between content-center gap-y-2 p-3 rounded-lg bg-slate-500 hover:bg-slate-600 '>
                        <h4 className='flex flex-row items-center gap-x-2'> <BsWhatsapp /> WhatsApp</h4>
                        <h5>+2348105045530</h5>
                        <a href="https://wa.me/8105045530" target="blank" className='bg-blue-700 text-center shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                    </div>
                </div>
                
                <div className=" flex flex-col cursor-pointer justify-between content-center items-center w-66 gap-y-4 rounded-lg bg-slate-500 hover:bg-slate-600 shadow-md border-solid p-5 ">
                        <div>
                        <h1 className="text-3xl font-semibold text-center underline uppercase decoration-wavy">
                           Contact Form
                        </h1>
                        </div>
                    <div>
                        <form className="mt-6">
                        <div>
                            <label>
                            <span>Your name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder='Full name' 
                                className='px-3 block py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                            <span >Email address</span>
                            <input
                                name="email"
                                type="email"
                                placeholder='Email' 
                                className='px-3 block py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                            <span>Phone number</span>
                            <input
                                name="number"
                                type="number"
                                placeholder='Phone number' 
                                className='px-3 block py-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                            <span>Message</span>
                            <textarea
                                rows='5'
                                name="message"
                                type="text"
                                placeholder="Send a message"
                                className='px-3 block py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'>
                                </textarea>
                            </label>
                        </div>

                        <div class="mb-3">
                            <button
                            type="submit"
                            className=' shadow-md h-fit px-2 py-2 rounded-lg bg-blue-700 hover:bg-blue-500'>
                            Contact me
                            </button>
                        </div>

                        </form>
                    </div>
    </div>



        </div>
              
    </div>
  )
}
