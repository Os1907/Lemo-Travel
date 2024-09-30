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


      {/* <div className="  min-h-screen  flex justify-center items-center  relative z-2  pt-32 lg:mt-0 lg:mx-20 mx-4 ">

        <h1 dir="rtl" className={`text-5xl md:text-6xl lg:text-8xl  text-white  text-center ${arabicFont.className} mb-32 lg:mb-20  `}>
          <span className="block  mb-3 lg:mb-8 relative enFont font-bold">
            Lemoo Travel

          </span>

          إلى واحة السحر وأرض الجمال أستمتع بأفضل الأوقات .

        </h1>

        <Image src={whitePlan} alt="logo" width={1080} height={1080} className="absolute bottom-1/4 lg:bottom-8  w-64  lg:w-1/3 " />

        <div className={`absolute bottom-4    ${arabicFont.className}  -translate-x-1/2 left-1/2 bottom-36 lg:bottom-6   `}>
          <Link href="/about" className='bg-main group  px-5 py-1 rounded-3xl text-white '> 
            من نحن ؟
            <FaLocationArrow className='hidden text-lg ml-2 text-white group-hover:inline rotate-45' />
          </Link>

        </div>

      </div> */}

      <main dir='rtl' className='min-h-screen bg-white  grid grid-cols-2 pt-24 lg:pt-40 lg:mx-20 mx-4 relative'>
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
        <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:items-start flex-col relative   order-1 lg:order-2 ">
        <h1 dir="rtl" className={`text-5xl lg:text-6xl  text-main text-center  ${arabicFont.className} mb-5    `}>
        مغامرتك نحو دهب تبدأ هنا 
        <span className=' block'>
         مع ليمو!
        </span>
        </h1>
        <p className={`text-black text-sm lg:text-base  text-center mb-30 ${arabicFont.className}`}>
        انطلق معنا في رحلة لا مثيل لها نحو دهب، حيث يجتمع سحر الطبيعة بجمال المغامرة. مع ليمو، نأخذك في تجربة مميزة تبدأ من أعماق البحار إلى قمم الجبال، لتصبح كل لحظة ذكريات لا تُنسى تملأها روح الاستكشاف والدهشة.
        </p>
        <div className='text-xs lg:text-sm size-auto absolute right-10 top-20 lg:top-1/4  lg:pb-2 animate-floatTwo text-white bg-main rounded-full  p-1 transition-all duration-500 group '>
          
          <span className={` inline-block ${arabicFont.className} pr-2`}>
            أصنع ذكرياتك 
          </span>
          <BsCameraVideoFill className='inline  mx-2  ' />
          </div>
      
          <div className='text-xs lg:text-sm size-auto absolute left-10  lg:pb-2 bottom-1/3 lg:bottom-1/4 animate-floatTwo text-white bg-main rounded-full  p-1 transition-all duration-500 group '>
          
          <span className={` inline-block ${arabicFont.className} pr-2`}>
         أفضل الآماكن 
          </span>
          <FaLocationDot className='inline  mx-2  ' />
          </div>
        </div>

      </main>


    </>
  )
}

export default Hero

{/* <Framer time={150} >
     // /* absolute  z-10 translate-y-[40%]   bottom-1/4 left-[15%] 
          // // absolute w-1/2   z-10 top-1/4 left-[15%]'
          absolute z-10  top-1/2 -translate-y-1/2  left-1/2 mx-5"
          <Image src={img2} alt="logo" width={480} height={480} className="  w-1/3 h-64 object-cover  rounded-3xl  absolute z-10  top-1/2 -translate-y-1/2  left-1/2 mx-5" />

    </Framer> */}
{/* <main dir='rtl' className="  min-h-screen  w-full grid grid-cols-2  ">

      <div className='col-span-1 relative  z-2  bg-white flex justify-start  items-center  '>

        <h1 dir="rtl" className={`text-3xl lg:text-5xl  text-main    text-center ${arabicFont.className} `}>
          <span className="block  mb-3 lg:mb-8 relative">
          مع ليمو 
          <Image src={arrow} alt="logo" width={200} height={200} className="absolute top-4   lg:-top-0  -translate-x-1/2  left- 1/4 left-1/2   w-32 md:w-44 lg:size-auto "/>

            </span>
       
         إلى واحة السحر وأرض الجمال أستمتع بأفضل الأوقات .

        </h1>
        <div className='absolute -bottom-20  -translate-x-1/2 left-1/2  '>

        <Image src={whitePlan} alt="logo" width={1080} height={1080} className="   w-64  "/>
        <div className="absolute  w-64 ">

        <Button nav="#steps"/>

        </div>
        </div>
       
      </div>
      <div className="col-span-1 relative ">

      <Image src={bg} alt="logo" width={1080} height={1080} className="   object-cover w-full h-full "/>
<div className='bg-gradient-to-l from-white to-transparent absolute w-full h-full top-0 z-2'>

</div>

      </div>
      </main> */}