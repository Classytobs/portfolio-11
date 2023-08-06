import React, {useContext} from 'react'
import html from '../../Assets/html.svg'
import bootstrap from '../../Assets/bootstrap.svg'
import css from '../../Assets/css.svg'
import github2 from '../../Assets/github2.svg'
import js from '../../Assets/js.svg'
import react from '../../Assets/react.svg'
import tailwind from '../../Assets/tailwind.svg'
import git from '../../Assets/git.svg'
import py from '../../Assets/py.png'
import wordpress from '../../Assets/wordpress.png'
import figma from '../../Assets/figma.png'
import { ThemeContext } from '../Context/Theme-context'

export default function Technologies() {
    const {theme}=useContext(ThemeContext);

  return (
    <div className={theme? 'flex flex-col text-black bg-slate-100  px-32 py-16 font-serif':
    'flex flex-col bg-slate-800 text-white px-32 py-16 font-serif'}>
                 <div>
                 <h1 className='text-4xl pb-6 font-bold tracking-wide'>Tech Stack</h1>
                </div>
                
                <div className='flex flex-row justify-start gap-x-6'>
                     <div className='flex flex-row content-center items-center justify-between'><img src={html} alt='html' className='h-8 w-12'/> HTML </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={css} alt='css' className='h-8 w-12'/> CSS </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={tailwind} alt='tailwind' className='h-8 w-12'/> TAILWIND </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={bootstrap} alt='bootstrap' className='h-8 w-12'/> BOOTSTRAP </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={js} alt='javascript' className='h-8 w-12'/> JAVASCRIPT </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={react} alt='react' className='h-8 w-12'/> REACT </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={py} alt='python' className='h-8 w-12'/> PYTHON </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={git} alt='git' className='h-8 w-12'/> GIT </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={github2} alt='github' className='h-8 w-12'/> GITHUB </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={wordpress} alt='wordpress' className='h-8 w-12'/> WORDPRESS </div>
                     <div className='flex flex-row content-center items-center justify-between'> <img src={figma} alt='figma' className='h-8 w-12'/> FIGMA </div>
                   </div>
                </div>
                   

  )
}
