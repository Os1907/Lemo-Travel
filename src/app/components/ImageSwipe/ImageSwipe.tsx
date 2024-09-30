'use client'
import { arabicFont } from '@/helper/font';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
interface Iprop {
  images: Array<string>;
}
const ImageSwipe = ({ images }: Iprop) => {
  const [render, setRenaded] = useState(false)
  useEffect(()=>{
    setRenaded(true)
  },[])

  return (
    <>
    {
      render ? <Swiper className="Image-swipe" dir='ltr'   loop={true} 
      autoplay={{ delay: 3000 }}
      >
      {
        images?.map(img => {
          return (
            <SwiperSlide key={String(img)} className='h-52 lg:h-80 overflow-hidden'>

              <Image alt={String(img)} src={img ? img : ''} width={1080} height={1080} className=" h-52 lg:h-80 rounded-2xl w-full object-cover" />
            </SwiperSlide>
          )
        })
      }
      {/* <Image alt={place.name}
                                  width={1080}
                                  height={1080} className=" h-52 lg:h-80 rounded-2xl w-full object-cover" src={String(place.img?.src)} /> */}
    </Swiper> : <div>
      <p  className={`text-main ${arabicFont.className} `}>
        جاري التجميل ....
      </p>
    </div>
    }
      

    </>
  )
}

export default ImageSwipe