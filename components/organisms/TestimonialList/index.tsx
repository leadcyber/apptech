import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar.png"
            name="Sarah Thompson"
            company="CEO, Tech Innovators Inc."
            testimony={`"
            TRAVIS DEAN ASHLEY exceeded our expectations. Their custom software solutions streamlined our
            operations, boosting efficiency. Exceptional service!
            "`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-2.png"
            name="Mark Rodriguez"
            company="Founder, Digital Ventures Co."
            testimony={`"
            Their team's expertise and dedication ensured a flawless and user-friendly mobile application.
            "`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-3.png"
            name="Emily Chen"
            company="E-commerce Manager, TrendyStyles Boutique"
            testimony={`"
            TRAVIS DEAN ASHLEY's e-commerce solutions enhanced user experience, driving sales and customer satisfaction.
            "`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
