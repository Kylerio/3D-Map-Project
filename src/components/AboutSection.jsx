import React from 'react'

import { about } from '../data/data'

const AboutSection = () => {
  return (
    <section id='About' className="relative py-10 border-b border-neutral-700 min-h-[700px]">
        <div className="container mx-auto text-center">
            <span className="text-md font-bold uppercase">About This 
                <span className='bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text'>
                    {" "}
                    3D Map Project
                </span>
            </span>
            <h2 className="max-w-5xl mx-auto text-2xl lg:text-3xl m-12">
            This map showcases Jakarta through a combination of 3D building models and population density data, providing an intuitive view of the city's structure and demographics.
            </h2>
        </div>
        <div className="flex flex-wrap mt-12">
            {about.map((about, data) => (
                <div key={data} className="max-w-6xl lg:w-1/2">
                    <div className='flex'>
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-500 justify-center items-center rounded-full">
                            {about.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">{about.text}</h5>
                            <p className='text-md p-2 mb-20 text-neutral-400'>{about.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AboutSection