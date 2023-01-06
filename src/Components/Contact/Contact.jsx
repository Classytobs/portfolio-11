import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col bg-zinc-900 min-h-screen px-36 py-2 max-w-full justify-betwwen content-between items-start font-serif text-white'>
        <div className='w-96 mb-8'>
            <h1 className='text-5xl mb-4'>GET IN TOUCH</h1>
            <h2 className='text-2xl'>Contact me so we can create something truly spectacular!</h2> 
        </div>
        <div className='flex flex-row ml-32 justify-between items-center rounded-lg shadow-2xl border-solid border-2 border-indigo-600 space-x-60 p-5'>
            <div className='flex flex-col content-center gap-y-2'>
                <div className='p-4 rounded-lg flex flex-col content-center gap-y-2'>
                    <h4>Email</h4>
                    <h5>adewumitobi@gmail.com</h5>
                    <a href="mailto:adewumitobi20@gmail.com" target="blank"className='bg-blue-700 shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                </div>
                <div className='p-4 rounded-lg flex flex-col content-center gap-y-2'>
                    <h4>LinkedIn</h4>
                    <h5>Oluwatobi Adewumi</h5>
                    <a href="#" taget="blank" className='bg-blue-700 shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                </div>
                <div className='p-4  flex flex-col content-center gap-y-2 rounded-lg'>
                    <h4>WhatsApp</h4>
                    <h5>+2348105045530</h5>
                    <a href="https://wa.me/08105045530" target="blank" className='bg-blue-700 shadow-lg h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send a message</a>
                </div>
            </div>
            <div className='flex flex-col content-center items-start gap-y-4 '>
                <input type="text" name="name" placeholder='Full name' className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-black w-96' />
                <input type="email" name="email" placeholder='Email' className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-black w-96'/>
                <input type="number" name="number" placeholder='Phone number' className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-black w-96'/>
                <textarea name="message" rows="7" placeholder='Your message' className='px-3 py-2 bg-white border-solid border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-black w-96'/>
                <button type='submit' className='bg-blue-700 shadow-lg h-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Send Message</button>
            </div>

        </div>
              
    </div>
  )
}
