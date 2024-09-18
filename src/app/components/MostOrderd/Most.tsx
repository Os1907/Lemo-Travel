import React from 'react'
import { arabicFont } from '@/helper/font'
import Dots from '../StlyesComponents/Dots'
import Card from '../Card/Card'
import { Hotels } from '@/helper/hotels'
import Title from '../title/title'
import Link from 'next/link'

const Most = () => {
  const TopHotels = Hotels.filter((hotel) => hotel.name === "فندق دهب لاجون" || hotel.name === "فندق جيمي" || hotel.name === "فندق جولدن هايتس" ).sort((a,b)=> a.price > b.price ? -1 : 1)
  return (
    <>
    <div className="bg-white    w-full relative min-h-screen  ">
       <Dots/>
       <div dir="rtl" className={`mx-4 lg:mx-20 ${arabicFont.className}`}>

        
       <Title title="الأكثر طلباً"/>
      
        <Card places={TopHotels}/>
        <div className='flex justify-center items-center my-10 relative z-1'>
          <Link href={"/hotels"} >
          <p className='bg-black text-xxs md:text-sm text-white  px-6 py-2 rounded-3xl   hover:px-10 duration-150 transition-all'>

            أستكشف المزيد 
          </p>

          </Link>
        </div>
       </div>

      </div>
    
    
    
    
    
    
    </>
  )
}

export default Most