import React, {useContext} from 'react'
import { ThemeContext } from '../Context/Theme-context'


export default function Footer() {

  const {theme}=useContext(ThemeContext);

  return (
    <div className={theme? 'flex flex-col w-full justify-between items-center content-center px-6 md:px-16 lg:px-32 gap-y-8 py-5 bg-slate-200 text-dark font-serif':
    'flex flex-col w-full justify-between items-center bg-slate-900 gap-y-8 content-center px-6 md:px-16 lg:px-32 py-5 font-serif text-white'}>
        <div className='flex flex-col md:flex-row w-full justify-between items-center content-center gap-y-8'>

          <div href="#home"className='text-3xl md:text-4xl cursor-pointer flex flex-row '>
            <div>Classy</div>
            <div className="text-blue-600">Tobs</div>
          </div>

          <div className='flex flex-row text-xl gap-x-6 md:gap-x-8'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pr">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

      </div>

        <div className='flex flex-row  gap-x-2 justify-start'>
          <div className='underline'><h2> Terms of Service</h2></div>
          <div><h2>.</h2></div>
          <div className='underline'><h2> Privacy Policy</h2></div>
          
        </div>
        
        <div>
            <small>Copyright @ Classytobs.</small>
        </div>
      
    </div>
  )
}
