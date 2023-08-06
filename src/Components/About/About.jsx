import React, {useContext} from 'react'
import github from '../../Assets/github.png'
import twitter from '../../Assets/twitter.jpg'
import linkedin from '../../Assets/linkedin.jpg'
import { ThemeContext } from '../Context/Theme-context'
import TOBS002 from '../../Assets/TOBS002.png'

export default function About() {
  const {theme}=useContext(ThemeContext);

  return (
    <div id='about' className={theme? 'bg-slate-200 flex flex-col md:flex-col lg:flex-col text-black justify-between  min-h-screen max-w-full px-6 md:px-16 lg:px-32 py-8 font-serif gap-y-2':
    'bg-slate-900 flex flex-col md:flex-col lg:flex-col text-white justify-between min-h-screen max-w-full px-6 md:px-16 lg:px-32 py-8 gap-y-2 font-serif'
     }>
            <div className='text-4xl font-bold tracking-wide'>
                <h1>About me</h1>
              </div>

          <div className='flex flex-col gap-y-4 md:flex-row'>
            <div className=' flex item-center content-center justify-center mb-2 md:mr-12 w-full md:w-1/2 lg:w-2/5'>
              <img src={TOBS002} alt='me'/>
            </div>
            <div className='flex flex-col gap-y-6 w-full md:w-1/2 lg:w-3/5 md:justify-center'>
              <div>
                <h1 className='text-4xl font-bold'>Frontend Developer</h1>
                </div>
                <div>
                  <p className='text-2xl leading-relaxed'>
                    My name is Oluwatobi Adewumi. I'm a front-End Developer who enjoys creatively building a functional user interface. My technical skills include proficiency 
                    in HTML,CSS, JavaScript, and their frameworks such as bootstrap, tailwind and react. I am well versed in responsive design principles ensuring that websites
                    look great and function seamlessly across different devices and screen sizes.I'm constantly learning and keeping myself up-to-date with the latest technologies.
                  </p>
                  </div>
                  <div>
                      <div className='flex flex-row cursor-pointer justify-start space-x-11 mt-4'>
                        <a href="https://twitter.com/engr_tobs" target="blank"> <img src={twitter} alt='twitter' className='w-12 h-12 rounded-full transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300' /></a>
                        <a href="https://linkedin.com/in/oluwatobi-adewumi-879548213" target="blank"><img src={linkedin} alt='linkedin' className='w-12 h-12 rounded-lg transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300' /></a>
                        <a href="https://github.com/Classytobs" target="blank"> <img src={github} alt='github' className='w-12 h-12 rounded-full  transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300' /></a>
                      </div>
                  </div>
              </div>

              </div>
        
        </div>
  )
}
