import React from 'react'
import { arabicFont, arabicFontMeduim } from '@/helper/font'
import Dots from '../StlyesComponents/Dots'
import Card from '../Card/Card'
import { Hotels } from '@/helper/hotels'
import Title from '../title/title'
import Button from '../Button/Button'
import line from '../../../Images/lins.svg'
import Image from 'next/image'

const Most = () => {
  const TopHotels = Hotels.filter((hotel) => hotel.name === "فندق دهب لاجون" || hotel.name === "فندق جيمي" || hotel.name === "فندق إيكوتيل دهب").sort((a, b) => a.price > b.price ? -1 : 1)
  return (
    <>
      <div className="    w-full relative min-h-screen pb-5">
        <Dots />
        <Image src={line} alt="plan" className=" w-full h-full absolute  opacity-55  " />
        <div dir="rtl" className={`mx-4 lg:mx-20 ${arabicFont.className} pt-10 lg:py-10 `}>


          <Title title="الأكثر طلباً" />

          <Card places={TopHotels} />
          <div className='text-center  text-xxs lg:text-sm my-5  '>
            <span className={`text-main   ${arabicFontMeduim.className}`}>
              جميع الآسعار تكون لليلة الواحدة
            </span>
          </div>


          <Button nav="/hotels" />
        </div>

      </div>






    </>
  )
}

export default Most