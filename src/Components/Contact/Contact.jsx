import React,{useContext} from 'react'
import { ThemeContext } from '../Context/Theme-context'
import illustrator2 from '../../Assets/illustrator2.jpg'

export default function Contact() {
    const {theme}=useContext(ThemeContext);

  return (
    <div id='contact' className={theme?'flex flex-col bg-slate-100 gap-y-8 min-h-screen px-6 md:px-16 lg:px-32 text-black py-8 font-serif':
    'flex flex-col bg-slate-800 gap-y-8 min-h-screen px-6 md:px-16 lg:px-32 text-white py-8 font-serif'}>
        <div>
            <h1 className='text-3xl md:text-4xl font-bold tracking-wide'>Contact Me</h1>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-start gap-y-8 gap-x-8 w-full'>
            <div className='w-full md:w-1/2 md:mr-8'>
            <img src={illustrator2} alt='me'className='h-full w-full rounded-md'/>

            </div>
            <div className='w-full md:w-1/2'>
            <form className='flex flex-col justify-between gap-y-6'>
                        <div className='flex flex-col'>
                            <label>
                            <span>Your name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Full name' 
                                className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            
                        </div>

                        <div className='flex flex-col'>
                            <label>
                            <span >Email address</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder='Email' 
                                className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            
                        </div>
                        <div className='flex flex-col'>
                            <label>
                            <span>Phone number</span>
                            </label>
                            <input
                                name="number"
                                type="number"
                                placeholder='Phone number' 
                                className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'
                            />
                            
                        </div>
                        <div className='flex flex-col'>
                            <label>
                            <span>Message</span>
                            </label>
                            <textarea
                                rows='5'
                                name="message"
                                type="text"
                                placeholder="Send a message"
                                className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic focus:outline-none focus:border-sky-500 text-black'>
                                </textarea>
                            
                        </div>

                        <div>
                            <button
                            type="submit"
                            className=' shadow-md h-fit px-2 py-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-white'>
                            Contact me
                            </button>
                        </div>

                        </form>
               
            </div>            
        </div>

        {/* <div className='flex flex-col gap-y-8 justify-between content-center items-center'>

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
                        
                    </div>
    </div>



        </div> */}
              
    </div>
  )
}
