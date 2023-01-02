import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col bg-zinc-900 h-screen px-36 py-5 max-w-full content-between items-start font-serif text-white'>
        <div className='w-96 mb-8'>
            <h1 className='text-5xl mb-4'>GET IN TOUCH</h1>
            <h2 className='text-2xl'>Contact me so we can create something truly spectacular!</h2> 
        </div>
        <div className='flex flex-row justify-between items-center border-solid border-2 border-indigo-600 space-x-60 p-5'>
            <div >
                <div className='p-4'>
                    <h4>Email</h4>
                    <h5>adewumitobi@gmail.com</h5>
                    <a href="mailto:adewumitobi20@gmail.com"  target="_blank">Send a message</a>
                </div>
                <div className='p-4'>
                    <h4>LinkedIn</h4>
                    <h5>Oluwatobi Adewumi</h5>
                    <a href="rhttps://ng.linkedin.com/in/toyoabasi-bob-9835a7245?trk=people-guest_people_search-card" taget="_blank">Send a message</a>
                </div>
                <div className='p-4'>
                    <h4>WhatsApp</h4>
                    <h5>+2348105045530</h5>
                    <a href="https://wa.me/08105045530" target="_blank">Send a message</a>
                </div>
            </div>
            <div className='flex flex-col content-center items-start gap-y-4 '>
                <input type="text" name="name" placeholder='Full name' className='p-2 rounded-lg w-96' required />
                <input type="email" name="email" placeholder='Email' required className='p-2 rounded-lg w-96'/>
                <input type="number" name="number" placeholder='Phone number' required className='p-2 rounded-lg w-96'/>
                <textarea name="message" rows="7" placeholder='Your message' required className='p-2 w-96'/>
                <button type='submit' className='p-2'>Send Message</button>
            </div>

        </div>
        
      
    </div>
  )
}
