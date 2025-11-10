"use client"; // This is the crucial line!

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 2. Data Definition: Simplified to a constant array. No need for a function here.
const testimonials = [
  {
    name: 'Ayushi Verma',
    role: "Software Engineer",
    image: '/ayushi.jpg',
    feedback:
      ' CareerZenith\'s AI interview simulator was incredible! The questions were tailored to my industry, and the instant feedback helped me identify my weak areas. Within a month, I aced my interviews and landed my dream role!',
  },
  {
    name: 'Ankit Chaubey',
    role: 'Senior Developer',
    image: '/ankit.jpg',
    feedback:
      'The industry insights dashboard gave me real-time salary data and market trends that helped me negotiate a 30% salary increase. The AI-powered career guidance was exactly what I needed for my transition to product management.',
  },
  {
    name: 'Govind Chaubey',
    role: 'Developer',
    image: '/govind.jpg',
    feedback:
      'The AI resume builder transformed my resume from generic to outstanding. My ATS score jumped from 45% to 92%! I went from zero callbacks to receiving 8 interview requests in just two weeks. This platform is a game-changer!',
  },
  {
    name: 'Javed Malik',
    role: 'Data Scientist',
    image: '/javed.jpg',
    feedback:
      'The cover letter generator saved me hours of work. Each letter was personalized and professional. Combined with the interview prep, I felt confident throughout my job search. Highly recommend CareerZenith to anyone serious about career growth!',
  },
  {
    name: 'Nishant Pandey',
    role: 'Backend Developer',
    image: '/nishant.jpg',
    feedback:
      'As a career changer, the industry insights helped me understand what skills I needed to develop. The mock interviews with AI feedback prepared me perfectly. Now I am thriving in my new role in tech!',
  },
   {
    name: 'Siddharth Rai',
    role: 'Data Scientist',
    image: '/PHOTO-2025-11-08-23-12-00.jpg',
    feedback:
      'CareerZenith\'s comprehensive approach to career development is unmatched. From resume building to interview prep to market insights - everything I needed was in one place. The AI assistant answered all my questions instantly!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-10 relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 grid-background"></div>
      <h2 className="text-3xl mt-5 mb-2 sm:text-[40px] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center bg-gradient-to-r from-blue-950 to-yellow-200 bg-clip-text text-transparent sm:border-2  rounded-md animate-fade-in">
        What My Clients Are Saying
      </h2>

      <Swiper
        // Swiper modules
        modules={[Navigation, Pagination]}
        // Swiper props
        navigation
        pagination={{ clickable: true }}
        loop={true}
        // Styling
        className="mySwiper !py-14 relative z-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="px-4 sm:px-8 md:px-16 lg:px-60">
            <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-6 sm:p-8 md:p-9 border border-gray-50 bg-gray-600 cursor-grab mx-auto animate-fade-in-up">
              <img
                className="shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] rounded-full object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                src={testimonial.image}
                alt={testimonial.name}
              />

              {/* 3. Text Alignment & Structure: Adjusted for better readability */}
              <div className="flex flex-col text-left pt-6 md:pt-0 md:ml-6 w-full">
                <p className="text-sm sm:text-base mb-4 text-white/90 ">{testimonial.feedback}</p>
                <div className="mt-auto text-right">
                  <h3 className="gradient-title font-bold text-xl sm:text-2xl md:text-3xl">
                    {testimonial.name}
                  </h3>
                  {/* 4. Populated the role from data */}
                  <h4 className="text-blue-400 text-sm sm:text-base md:text-lg">
                    {testimonial.role}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}