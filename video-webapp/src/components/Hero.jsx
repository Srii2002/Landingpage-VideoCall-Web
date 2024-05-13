import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const slides = [
  {
    title: 'Best Video Call for users',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpZGVvY2FsbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Good Quality',
    image: 'https://images.unsplash.com/photo-1653566031587-114b636e182b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvY2FsbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Get connected to connected peoples..',
    image: 'https://images.unsplash.com/photo-1573497161249-42447f9f6706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvY2FsbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const Hero = () => {
  return (
    <div className="relative container mx-auto" style={{ maxWidth: '1600px' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        controller={{ control: '.swiper-pagination' }}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} >
            <div
              className=" block w-full h-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                height: '50vh',
                backgroundImage: `url('${slide.image}')`,
                backgroundBlendMode: 'linear',
              }}
            >
              <div className="container mx-auto">
                <div className="bg-black opacity-65 flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-8 tracking wide rounded-sm">
                  <p className="text-white text-2xl my-4 pt-2">{slide.title}</p>
                  <a
                    href="#"
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;