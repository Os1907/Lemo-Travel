import React from 'react'
import Dots from '../components/StlyesComponents/Dots'
import { arabicFont } from '@/helper/font'

const loading = () => {
  return (
    <>
    <div className='min-h-screen relative  '>
        <Dots/>

        <p className={`text-3xl text-main font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${arabicFont.className}`}>
        .... جاري التجميل برجاء الآنتظار 
        </p>

    </div>
    </>
  )
}

export default loading