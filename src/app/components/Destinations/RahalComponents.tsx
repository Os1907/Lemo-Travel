import React from 'react'
// import { Wave } from '../StlyesComponents/wave'
import Dots from '../StlyesComponents/Dots'
import SwiperDestinations from '../SwiperDestinations/Swiper'
import { Idestination } from '@/helper/interfaces'
import Title from '../title/title'
import { arabicFont } from '@/helper/font'


interface Iporp{
  BestDestination:Idestination[]
  title:string,
  time:number,
  style?:boolean
}
const RahalComponents = ({BestDestination , title , time , style}:Iporp) => {
  return (
    <>
     <section className="bg- white black  mx-10 w-full relative pt-8">
            <Dots/>
       <div className={`relative h-full w-full ${arabicFont.className}`}>
        
        <Title title={title}/>
        <div className=' my-4  '>
      
        <SwiperDestinations data={BestDestination} time={time} style={style}/>


        </div>
        </div>

      </section>
    
    
    
    </>
  )
}

export default RahalComponents