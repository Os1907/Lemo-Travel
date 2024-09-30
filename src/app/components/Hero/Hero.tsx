import React from 'react'
import Image from "next/image";
import img1 from '../../../Images/img1.png'
import img2 from '../../../Images/img2.png'
import img3 from '../../../Images/img3.png'
import plan from '../../../Images/hero.svg'
import send from '../../../Images/send.svg'
import { arabicFont } from '@/helper/font';
import { IoMdPlanet } from 'react-icons/io';
import { FaCamera } from 'react-icons/fa';
import Dots from '../StlyesComponents/Dots';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
const Hero = () => {

  return (
    <>



      <main dir='rtl' className=' bg-white  grid grid-cols-2 pt-24 lg:pt-40 lg:mx-20 mx-4 relative'>
      <Dots/>

        <div className="col-span-2 lg:col-span-1 relative  flex gap-x-3  justify-center  order-2 lg:order-1 pt-20 lg:pt-0">
          <div className='flex justify-center items-center relative z-10 '>

            <Image src={img2} alt="logo" width={480} height={480} className=" shadow-md w-36 h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 object-cover  rounded-3xl  " />
            {/* planet Icon */}
            <div className='size-10 absolute bottom-1/2 text-white bg-main rounded-full p-3 -right-5  hover:rotate-180 transition-all duration-500 animate-float'>

              <IoMdPlanet />
            </div>
            {/* Camera Icon */}
            <div className='size-10 absolute top-3/4 text-white bg-main rounded-full p-3 -translate-x-1/2 left-1/2  animate-floatTwo '>

              <FaCamera />
            </div>
          </div>
          <div className='flex justify-center items-center  flex-col gap-y-3   relative z-10  '>

            <Image src={img1} alt="logo" width={480} height={480} className=" shadow-md w-36 h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 object-cover  rounded-3xl     " />

            <Image src={img3} alt="logo" width={480} height={480} className=" shadow-md w-36 h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 object-cover  rounded-3xl    " />
            {/* Icon */}
            <div className='size-10 absolute top-1/3 bg-main rounded-full p-3 -left-5  hover:rotate-180 transition-all duration-500 animate-float '>

              <Image src={send} alt="logo" width={480} height={480} />
            </div>
          </div>
          <Image src={plan} alt="logo" width={480} height={480} className="  w-full  absolute  top-5 lg:-top-10 z-1  " />

        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:items-start flex-col relative pt-5 sm:pt-3 lg:pt-0  order-1 lg:order-2 ">
        <h1 dir="rtl" className={`text-5xl lg:text-6xl  text-main text-center  ${arabicFont.className} mb-5 relative   `}>
        مغامرتك نحو دهب تبدأ هنا 
        <span className=' block'>
         مع ليمو!
        </span>
        <div className='text-[8px] lg:text-sm size-auto absolute right-0 lg:right-10 -top-3 lg:-top-5 xl:-top-10  lg:pb-2 animate-floatTwo text-white bg-main rounded-full  p-1 transition-all duration-500 group '>
          
          <span className={` inline-block ${arabicFont.className} pr-2`}>
            أصنع ذكرياتك 
          </span>
          <BsCameraVideoFill className='inline  mx-2  ' />
          </div>
        </h1>
        <h5 className={`text-black text-sm lg:text-base  text-center mb-30 ${arabicFont.className} relative`}>
        انطلق معنا في رحلة لا مثيل لها نحو دهب، حيث يجتمع سحر الطبيعة بجمال المغامرة. مع ليمو، نأخذك في تجربة مميزة تبدأ من أعماق البحار إلى قمم الجبال، لتصبح كل لحظة ذكريات لا تُنسى تملأها روح الاستكشاف والدهشة.
        <div className='text-[8px] lg:text-sm size-auto absolute left-3 lg:left-10  lg:pb-2 -bottom-5 md:-bottom-7 lg:-bottom-10 animate-floatTwo text-white bg-main rounded-full  p-1 transition-all duration-500 group '>
          
          <span className={` inline-block ${arabicFont.className} pr-2`}>
         أفضل الآماكن 
          </span>
          <FaLocationDot className='inline  mx-2  ' />
          </div>
        </h5>
        
      
          
        </div>

      </main>


    </>
  )
}

export default Hero
