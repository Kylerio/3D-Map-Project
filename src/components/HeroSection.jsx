import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-bannerImg bg-no-repeat bg-cover bg-center'>
        <div className='w-full h-screen bg-blackOverlay'>
            <div className="flex flex-col justify-center items-center h-full text-center px-6 text-white ">
                <h1 className="text-5xl font-bold mb-4">Explore Our 3D Map Project</h1>
                <p className="text-lg max-w-2xl">
                    Easily view data on population density, land use, and 3D buildings with our interactive map. See how these elements come together to offer clear insights.
                </p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection