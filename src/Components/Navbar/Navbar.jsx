import React, {useContext, useState} from 'react'
import day from '../../Assets/day.png'
import night from '../../Assets/night.png'
import { AiOutlineBars } from "react-icons/ai";
import { ThemeContext } from '../Context/Theme-context'

export default function Navbar({toggle}) {
  const {theme, changeTheme}=useContext(ThemeContext);



  const [active, setActive] = useState("#home");
  const [logo, setLogo] = useState(false);

  const toggleLogo = () => {
    if (!logo) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  
    
  return (
    <div className='relative'>
    <div className={theme? 'flex flex-row fixed w-full z-50 justify-between items-center content-center px-4 md:px-16 lg:px-32 py-5 bg-slate-100 shadow-lg text-dark font-serif':
    'flex flex-row fixed w-full justify-between z-50 items-center content-center py-5 px-4 md:px-16 lg:px-32 text-white font-serif bg-slate-800 shadow-lg'} >
      <div href="#home"className='text-4xl cursor-pointer flex flex-row' >
          <div>Classy</div>
          <div className="text-blue-600">Tobs</div>
      </div>

      <div className='flex flex-col text-xl gap-y-5 md:flex md:flex-row md:items-center md:gap-x-5 hidden md:block'>
        <div className={active? 'text-blue-600':'text-blue-400'} onClick={() => setActive('href')}><a href="#home">Home</a></div>
        <div  className={active? 'text-blue-600':'text-blue-400'} onClick={() => setActive('href')}><a href="#about">About</a></div>
        <div className={active? 'text-blue-600':'text-blue-400'} onClick={() => setActive('href')}><a href="#pr">Portfolio</a></div>
        <div className={active? 'text-blue-600':'text-blue-400'} onClick={() => setActive('#href')}><a href="#contact" >Contact</a></div>
      </div>

      <div className='cursor-pointer' onClick={changeTheme} >
      {logo ? (
            <img src={day} alt="day" onClick={toggleLogo}  className='h-12 w-12'/>
          ) : (
            <img src={night} alt="night" onClick={toggleLogo} className='h-12 w-12'/>
          )}
      </div> 

      <div className='md:hidden cursor-pointer' onClick={toggle}>
        <AiOutlineBars/>
      </div>

      </div>

    </div>
    
  )
}
