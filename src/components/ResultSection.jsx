import React from 'react'

import fullMap from '../assets/fullmap.jpeg'

const ResultSection = () => {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-[500px] px-4'>
        <span className='text-md font-bold uppercase'>Result</span>
        <div className='flex flex-col md:flex-row my-6 gap-6'>
            <div className='flex flex-col max-w-lg text-center md:text-left'>
                <h2 className='text-2xl font-bold mb-4'>This is our result</h2>
                <p className='mb-6'>This map presents a comprehensive visualization of population density in Jakarta, integrating multiple data sources and advanced mapping technologies. The base map is built using Leafmap, enhanced with ESA WorldCover data for detailed land use information, and styled with high-resolution tiles from MapTiler. The population density data is sourced from Satu Data Jakarta, offering insights into population distribution per kelurahan. Additionally, polygon boundaries for each kelurahan are derived from the Dukcapil GIS Portal, ensuring precise spatial representation. This map serves as a valuable tool for urban planning, demographic analysis, and decision-making.</p>
                <button>
                    <a
                    href="/3DMapModelPopulationDensityFin.html" // Path ke file HTML Anda
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Meningkatkan keamanan
                    className="px-6 py-2 font-bold text-white rounded-md bg-purple-700 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-400 transition-colors duration-800"
                    >
                        View Map
                    </a>
                </button>
            </div>
            <div className='w-full md:w-auto flex justify-center'>
                <img className='max-w-full h-auto rounded-lg shadow-md' src={fullMap} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default ResultSection