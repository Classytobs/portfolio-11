import React, {useContext} from 'react'
import meta from '../../Assets/meta.JPG'
import excuse from '../../Assets/excuse.JPG'
import speech from '../../Assets/speech.JPG'
import todos from '../../Assets/todos.JPG'
import { ThemeContext } from '../Context/Theme-context'


export default function Projects() {
  const {theme}=useContext(ThemeContext);

  return (
    <div id='pr' className={theme? 'flex flex-col text-black bg-slate-200 min-h-screen px-6 md:px-16 lg:px-32 gap-y-16 py-16 font-serif':
    'flex flex-col bg-slate-900 text-white min-h-screen px-6 md:px-16 lg:px-32 gap-y-16 py-16 font-serif'}>

              <div className='text-4xl font-bold tracking-wide'>
                <h1>Portfolio</h1>
              </div>

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8'>
                <img src={meta} alt='Meta Bnb React App' className='w-full md:w-1/3 lg:w-1/3 h-80 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-8 justify-between md:ml-12 lg:ml-12'>
                  <div className='text-4xl font-bold'>A meta bnb app</div>
                  <div><h1 className='text-2xl leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo soluta voluptatum, earum dicta eaque eos amet officiis quisquam commodi?
                 Culpa non tenetur aut nostrum sint tempora! Eum cupiditate ea deleniti.
                 </h1>
                 </div>
                 <div className='flex flex-row gap-x-8'>
                 <a href="https://github.com/Classytobs/meta-bnb3.git"
                  target='blank' 
                  className='bg-blue-700 text-white shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Github Link</a>
                 <a href="https://metabb.netlify.app/" target='blank'  className='bg-blue-700 shadow-md text-white  h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Live Demo</a>
                 </div>
                 </div>


              </div>

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8'>
                <img src={todos} alt='Todo list app' className='w-full md:w-1/3 lg:w-1/3 h-80 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-8 justify-between md:ml-12 lg:ml-12'>
                <div className='text-4xl font-bold'>Todo list app</div>
                  <div><h1 className='text-2xl leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo soluta voluptatum, earum dicta eaque eos amet officiis quisquam commodi?
                 Culpa non tenetur aut nostrum sint tempora! Eum cupiditate ea deleniti.
                 </h1>
                 </div>
                 <div className='flex flex-row gap-x-8'>
                 <a href="https://github.com/Classytobs/TODO-LIST-APP"
                  target='blank' 
                  className='bg-blue-700 text-white shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Github Link</a>
                 <a href="https://mytodos99.netlify.app/" target='blank'  className='bg-blue-700 shadow-md text-white  h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Live Demo</a>
                 </div>
                 </div>

              </div>

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8'>
                <img src={speech} alt='Meta Bnb React App' className='w-full md:w-1/3 lg:w-1/3 h-80 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-8 justify-between md:ml-12 lg:ml-12'>
                <div className='text-4xl font-bold'>Speech synthetizer</div>
                  <div><h1 className='text-2xl leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo soluta voluptatum, earum dicta eaque eos amet officiis quisquam commodi?
                 Culpa non tenetur aut nostrum sint tempora! Eum cupiditate ea deleniti.
                 </h1>
                 </div>
                 <div className='flex flex-row gap-x-8'>
                 <a href="https://github.com/Classytobs/Speech-synthetizer"
                  target='blank' 
                  className='bg-blue-700 text-white shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Github Link</a>
                 <a href="https://speechnarrator.netlify.app/" target='blank'  className='bg-blue-700 shadow-md text-white h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Live Demo</a>
                 </div>
                 </div>

              </div>

             
                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8'>
                <img src={excuse} alt='Todo list app' className='w-full md:w-1/3 lg:w-1/3 h-80 rounded-md shadow-lg' />

                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-8 justify-between md:ml-12 lg:ml-12'>
                <div className='text-4xl font-bold'>Excuse app</div>
                  <div><h1 className='text-2xl leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo soluta voluptatum, earum dicta eaque eos amet officiis quisquam commodi?
                 Culpa non tenetur aut nostrum sint tempora! Eum cupiditate ea deleniti.
                 </h1>
                 </div>
                 <div className='flex flex-row gap-x-8'>
                 <a href="https://github.com/Classytobs/Excuse-app"
                  target='blank' 
                  className='bg-blue-700 text-white shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Github Link</a>
                 <a href="https://excuseapp99.netlify.app/" target='blank'  className='bg-blue-700 shadow-md text-white  h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Live Demo</a>
                 </div>
                 </div>


              </div>

    </div>
  )
}
