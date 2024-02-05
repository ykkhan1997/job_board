'use client'
import React from 'react'
import { sliderImages } from '../data/sliderData'
import Slider from 'react-slick'

const CompanySlider = () => {
   const settings = {
      className: 'center home_carousel',
      dots: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      centerMode: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 540,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   }
   return (
      <div className="py-7 lg:py-9 px-8 bg-base-100 rounded-t-3xl absolute bottom-0 w-full right-0 left-0 container mx-auto ">
         <Slider {...settings}>
            {sliderImages?.map((item, index) => (
               <span key={index}>{item?.svg}</span>
            ))}
         </Slider>
      </div>
   )
}

export default CompanySlider

const NextArrow = ({ className, style, onClick }: any) => {
   return (
      <svg
         onClick={onClick}
         style={{ ...style }}
         className={`cursor-pointer !text-base-content hover:opacity-60 transition duration-300 ease-in-out ${className}`}
         width="10"
         height="16"
         viewBox="0 0 10 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.829505 0.454505C1.26884 0.015165 1.98116 0.015165 2.4205 0.454505L9.1705 7.2045C9.60983 7.64384 9.60983 8.35616 9.1705 8.7955L2.4205 15.5455C1.98116 15.9848 1.26884 15.9848 0.829505 15.5455C0.390165 15.1062 0.390165 14.3938 0.829505 13.9545L6.78401 8L0.829505 2.0455C0.390165 1.60616 0.390165 0.893845 0.829505 0.454505Z"
            fill="currentColor"
         />
      </svg>
   )
}

const PrevArrow = ({ className, style, onClick }: any) => {
   return (
      <svg
         onClick={onClick}
         style={{ ...style }}
         className={`cursor-pointer !text-base-content hover:opacity-60 transition duration-300 ease-in-out -left-3 ${className}`}
         width="10"
         height="16"
         viewBox="0 0 10 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1705 0.454505C9.60983 0.893845 9.60983 1.60616 9.1705 2.0455L3.21599 8L9.1705 13.9545C9.60983 14.3938 9.60983 15.1062 9.1705 15.5455C8.73116 15.9848 8.01884 15.9848 7.5795 15.5455L0.829505 8.7955C0.390165 8.35616 0.390165 7.64384 0.829505 7.2045L7.5795 0.454505C8.01884 0.015165 8.73116 0.015165 9.1705 0.454505Z"
            fill="currentColor"
         />
      </svg>
   )
}
