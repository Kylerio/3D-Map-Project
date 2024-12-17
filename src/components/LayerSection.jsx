import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Controller, Autoplay } from 'swiper/modules'

import { cards } from '../data/data'

const LayerSection = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className='relative py-10 border-b border-neutral-700 min-h-[900px] my-6'>
        <div className="flex flex-col justify-center items-center">
        <span className='text-md font-bold uppercase'>Layer</span>
            <div className="items-center justify-center flex-col h-full w-full">
                
                <Swiper
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                    }}

                    loop={true}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: false
                    }}
                    speed={800}
                    
                    rewind={true}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Navigation, Pagination, Controller, Autoplay]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    
                    className='max-w-5xl sm:max-w-3xl'
                >
                {cards.map((cards, data) => ( 
                    <SwiperSlide key={data} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-md mt-6 overflow-hidden relative'>
                        <div className='flex flex-col gap-6 group shadow-lg px-20 py-8'>
                            <div className="flex flex-col gap-3">
                                <img className='w-32 h-16 sm:w-48 sm:h-24 md:w-64 md:h-32 rounded-md' src={cards.image} alt="" /> 
                                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{cards.title} </h1>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl">{cards.description} </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                <Swiper
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                    }}
                    loop={true}
                    rewind={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination, Controller]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                
                    className='max-w-6xl sm:max-w-4xl mb-8'
                >
                    {cards.map((cards, data) => ( 
                        <SwiperSlide key={data} className='flex justify-center items-center mt-6'>
                            <div className=''>
                                <img className='object-cover rounded-md' src={cards.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                

            </div>
        </div>
    </section>
  )
}

export default LayerSection