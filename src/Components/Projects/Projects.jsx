import React from 'react'
import meta from '../../Assets/meta.PNG'
import linktree from '../../Assets/linktree.PNG'
import port1 from '../../Assets/port1.PNG'


export default function Projects() {

    const data = [
        {
          id:1,
          image:meta,
          title: "Meta Bnb React App",
          github: "https://github.com/Classytobs/meta-bnb3.git",
          demo: "https://metabb.netlify.app/"
        },
        {
          id:2,
          image:linktree,
          title: "Linktree",
          github: "https://github.com/Classytobs/hng-linktree-2.git",
          demo: "https://linktree2.netlify.app/"
        },
        {
          id:3,
          image:port1,
          title: "Personal Portfolio",
          github: "https://github.com/Classytobs/Portfolio-1.git",
          demo: "https://classy-tobs.netlify.app/"
        },
      ]

  return (
    <div className='flex flex-col  text-white bg-zinc-900 min-h-screen px-16 py-10 max-w-full justify-between gap-y-8 content-center items-center font-serif'>
            <div  className=' flex flex-row cursor-pointer justify-center content-center items-center bg-yellow-700 shadow-md h-fit px-5 py-3 rounded-lg hover:bg-yellow-800 text-3xl text-center'>
              <div className='mr-5'>
                  <h5>My Recent Work</h5>
              </div>
              <div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"></path>
                </svg>
              </div>
            </div>

            <div className='flex flex-col text-center items-center justify-between content-center gap-y-10'>
              <div className='text-2xl'>
                <h1>You can check out some of my recent work by clicking on the github or live demo button.</h1>
              </div>

              <div className='flex flex-col justify-between items-center content-center text-center text-2xl gap-y-8'>
                  {data.map(({id, image, title, github, demo}) => {
                    return(
                    <div key={id} className='cursor-pointer border-solid border-2 border-indigo-600 p-3 rounded-lg bg-slate-500 hover:bg-slate-600 w-52'>
                        <div className='mb-5'>
                          <img src={image} alt={title}  className='h-44 rounded-lg border-solid border-2 border-indigo-600' />
                        </div>
                      <h3 className='text-2xl'>{title}</h3>
                        <div className='mt-5 mb-5 justify-between w-full flex flex-col gap-y-5 text-center'>
                          <div>
                            <a href={github} target='blank' className='bg-blue-700 shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Github</a>  
                          </div>
                          <div>
                            <a href={demo} target='blank'  className='bg-blue-700 shadow-md h-fit w-fit px-2 py-2 rounded-lg hover:bg-blue-500'>Live Demo</a>
                          </div>     
                        </div>
                    </div>
                    )
                  })}

                  </div>
                </div>
    </div>
  )
}
