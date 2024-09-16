import React from 'react'
import Image from "next/image";
import arrow from '../../../Images/arrow.png'
import whitePlan from '../../../Images/wplan.png'
import { arabicFont } from '@/helper/font';
// import upper from '../../../Images/slider-mask.png'
const Hero = () => {

  return (
    <>
    <div className="  lg:min-h-screen w-full flex justify-center items-center mx-20 relative z-2 mb-10 lg:mb-0 mt-32 lg:mt-5">
        <h1 dir="rtl" className={`text-6xl lg:text-8xl  text-white  text-center ${arabicFont.className} mb-32 lg:mb-20  `}>
          <span className="block  mb-3 lg:mb-8 relative">
            رحال 
<Image src={arrow} alt="logo" width={200} height={200} className="absolute top-4   lg:-top-0  -translate-x-1/2  left- 1/4 left-1/2 xl: le ft-1/3  w-28  md:w-32 lg:size-auto "/>

            </span>
       
         إلى واحة السحر وأرض الجمال أستمتع بأفضل الأوقات .

        </h1>

        <Image src={whitePlan} alt="logo" width={1080} height={1080} className="absolute bottom-10 lg:bottom-20  w-64  lg:w-1/3 "/>
      </div>
    
    
    </>
  )
}

export default Hero