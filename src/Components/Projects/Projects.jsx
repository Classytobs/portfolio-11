import React, {useContext} from 'react'
import meta from '../../Assets/meta.JPG'
import excuse from '../../Assets/excuse.JPG'
import speech from '../../Assets/speech.JPG'
import todos from '../../Assets/todos.JPG'
import { ThemeContext } from '../Context/Theme-context'


export default function Projects() {
  const {theme}=useContext(ThemeContext);

  return (
    <div id='pr' className={theme? 'flex flex-col text-black bg-slate-200 min-h-screen px-6 md:px-16 lg:px-32 gap-y-8 py-16 font-serif':
    'flex flex-col bg-slate-900 text-white min-h-screen px-6 md:px-16 lg:px-32 gap-y-8 py-16 font-serif'}>

              <div >
                <h1 className='text-3xl md:text-4xl font-bold tracking-wide mb-4'>Portfolio</h1>
                <h2 className='text-xl md:text-2xl'>Every project is unique and these are some of the recent ones</h2>
              </div>

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8 border-2 border-blue-500 p-3 shadow-lg rounded-md'>
                <img src={meta} alt='Meta Bnb React App' className='w-full md:w-1/3 lg:w-1/3 h-96 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-4 justify-between md:ml-12 lg:ml-12'>
                  <div className='text-3xl md:text-4xl font-bold'>A meta bnb app</div>
                  <div><h1 className='text-xl md:text-2xl leading-relaxed'>In a world where travel has become more than a journey—it's a quest for unique 
                  experiences MetaBNB emerges as a groundbreaking platform that redefines the way we explore and connect with
                   the world around us. As a testament to my proficiency in envisioning and executing innovative solutions,
                    I proudly present the MetaBNB app—a revolutionary tool designed to transform ordinary travel 
                    into extraordinary memories.
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

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8 border-2 border-blue-500 p-3 shadow-lg rounded-md'>
                <img src={todos} alt='Todo list app' className='w-full h-96 md:w-1/3 lg:w-1/3 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-4 justify-between md:ml-12 lg:ml-12'>
                <div className='text-3xl md:text-4xl font-bold'>Todo list app</div>
                  <div><h1 className='text-xl md:text-2xl leading-relaxed'>In a world characterized by constant demands and a myriad of
                   responsibilities, staying organized is key to success. To demonstrate my skills in web development, I developed TodoList app, 
                  a task management app that redefines how users approach their daily tasks, goals, and aspirations.
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

                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8 border-2 border-blue-500 p-3 shadow-lg rounded-md'>
                <img src={speech} alt='Meta Bnb React App' className='w-full md:w-1/3 lg:w-1/3 h-96 rounded-md shadow-lg' />
                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-4 justify-between md:ml-12 lg:ml-12'>
                <div className='text-3xl md:text-4xl font-bold'>Speech synthetizer</div>
                  <div><h1 className='text-xl md:text-2xl leading-relaxed'> In the realm of modern technology, the power of the human voice is a force to be reckoned with.
                   To showcase my prowess in harnessing technology to create captivating user experiences,
                   I developed an innovative speech synthesizer that allow users to write texts and it reads it out.
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

             
                <div className='flex flex-col md:flex-row lg:flex-row gap-y-8 md:gap-x-8 lg:gap-x-8 border-2 border-blue-500 p-3 shadow-lg rounded-md'>
                <img src={excuse} alt='Todo list app' className='w-full md:w-1/3 lg:w-1/3 h-96 rounded-md shadow-lg' />

                <div className='w-full md:w-2/3 lg:w-2/3 flex flex-col gap-y-4 justify-between md:ml-12 lg:ml-12'>
                <div className='text-3xl md:text-4xl font-bold'>Excuse app</div>
                  <div><h1 className='text-xl md:text-2xl leading-relaxed'>In a fast-paced world filled with commitments and unexpected
                   twists, being courteous and considerate can sometimes be a challenge. To showcase my ability to leverage
                    technology for societal betterment, I developed an innovative excuse app designed to help give random excuses.
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
