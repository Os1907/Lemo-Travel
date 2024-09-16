import React from 'react'
import Plan from '../StlyesComponents/plan'
import { arabicFont } from '@/helper/font'
import { Wave } from '../StlyesComponents/wave'

const Most = () => {
  return (
    <>
    <div className="bg-white black min-h-[100vh] mx-10 w-full relative ">
       <Wave clas='absolute  h-32 lg:h-32 -top-20 lg:-top-24  w-full'/>
       <div className="relative h-full w-full ">
       <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
       
        
        <div className="relative z-1 my-5 flex justify-center items-center">
        <h2 dir="rtl" className={`text-2xl lg:text-6xl  text-black  pb-3 ${arabicFont.className}  inline-block `}>
        الأكثر طلباً

        </h2>
        <Plan clas={"absolute z-2 -top-20  "}/>
        </div>
        </div>

      </div>
    
    
    
    
    
    
    </>
  )
}

export default Most