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
          title: "A personal Portfolio with bootstrap",
          github: "https://github.com/Classytobs/Portfolio-1.git",
          demo: "https://classy-tobs.netlify.app/"
        },
      ]

  return (
    <div className='flex flex-col  text-white bg-zinc-900 h-screen px-36 py-5 max-w-full justify-between content-center items-center font-serif'>
            <div className='mb-6 text-4xl pt-12'>
                <h5>My Recent Work</h5>
            </div>

            <div className='flex flex-row justify-between items-center content-center w-full pb-32 '>
                {data.map(({id, image, title, github, demo}) => {
                  return(
                  <article key={id} className='border-solid border-2 border-indigo-600 p-3 rounded-lg'>
                      <div className='mb-5'>
                        <img src={image} alt={title}  className='h-52' />
                      </div>
                     <h3>{title}</h3>
                      <div className='mt-5 mb-5 justify-between w-full flex flex-row'>
                        <div>
                          <a href={github} target='blank'>Github</a>  
                        </div>
                        <div>
                          <a href={demo} target='blank'>Live Demo</a>
                        </div>     
                      </div>
                  </article>
                  )
                })}

                </div>
    </div>
  )
}
