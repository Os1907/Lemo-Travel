'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './SwiperStyle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { arabicFont } from '@/helper/font';
import { Idestination } from '@/helper/interfaces';


interface Iporp{
  data:Idestination[],
  time:number
}
const SwiperDestinations = ({data , time}:Iporp) => {
  return (
    <>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          scale: 1,
          modifier: 1.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: time,
          disableOnInteraction: false,
        }}

        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {
          data.map((place) => {
            return  <SwiperSlide className='rounded-3xl flex flex-col ' key={place.name+1123}>

            {({ isActive }) => (
              <>
                <div className={`relative  flex flex-col gap-y-2 items-center justify-center rounded-2xl ${ isActive ? '': '' }`}>
                  <Image src={String(place.image?.src)} alt={place.name} width={550} height={550} className={isActive ? '  rounded-2xl w-full  h-[280px] lg:h-[520px]' : ' rounded-2xl  w-full h-[280px] lg:h-[520px]  backdrop-blur-2xl'} />
                {
                  isActive ? <>

                    <div className='  bg-black  rounded-2xl w-3/4 lg:w-auto px-3 animationInterace '>
                    <h6 dir='rtl' className={` text-white font-medium  lg:text-xl text-sm text-center relative z-1 pb-2 `}>
                        <span className={` ${arabicFont.className}`}>{place.name}  </span>
                      </h6>
                     
                    </div>
                  </> : null}
                </div>
              </>
            )
  
            }
          </SwiperSlide>
          })
        }

        

      </Swiper>
    </>
  );
}

export default SwiperDestinations



 {/* <div className='bg-gradient-to-t from-white h-5 -top-5 w-full absolute '></div> */}
                      {/* <Dots/>
                      
                      <div dir='rtl' className={` mt-2 ${arabicFont.className} text-black  text-sm  text-center relative z-1 `}>
  
                        <p>
                          البلو هول هو واحد من أشهر مواقع الغطس في العالم، ويقع بالقرب من مدينة دهب على ساحل البحر الأحمر في مصر. يتميز البلو هول بكونه حفرة عميقة طبيعية تحت الماء على شكل دائري، ويصل عمقها إلى أكثر من 100 متر. يشتهر الموقع بجمال الشعاب المرجانية والتنوع البيولوجي المذهل للحياة البحرية، حيث يمكن للغواصين رؤية أسماك ملونة، شعاب مرجانية نادرة، وحتى بعض الكائنات البحرية الكبيرة مثل السلاحف.
                        </p>
                       
                      </div> */}