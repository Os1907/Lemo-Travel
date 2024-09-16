import React from 'react'
import Plan from '../StlyesComponents/plan'
import { Wave } from '../StlyesComponents/wave'
import { arabicFont } from '@/helper/font'
import Dots from '../StlyesComponents/Dots'
import SwiperDestinations from '../SwiperDestinations/Swiper'
import { Idestination } from '@/helper/interfaces'
// import { BestDestination } from '@/helper/DestinatinsData';


interface Iporp{
  BestDestination:Idestination[]
  title:string,
  time:number
}
const RahalComponents = ({BestDestination , title , time}:Iporp) => {
  return (
    <>
     <section className="bg-white black  mx-10 w-full relative ">
       <Wave clas='absolute  h-32 lg:h-32 -top-20 lg:-top-24  w-full'/>
            <Dots/>
       <div className="relative h-full w-full ">
        
        <div className="relative z-1 my-5 flex justify-center items-center">
        <h2 dir="rtl" className={`text-2xl lg:text-6xl  text-black  pb-3 ${arabicFont.className} `}>
       {title}
        </h2>
        <Plan clas={"absolute z-2 -top-20 "}/>
        </div>
        <div className='my-20 '>

        
        <SwiperDestinations data={BestDestination} time={time}/>


        </div>
        </div>

      </section>
    
    
    
    </>
  )
}

export default RahalComponents