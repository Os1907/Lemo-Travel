'use client'
import { arabicFontMeduim } from '@/helper/font'
import Link from 'next/link'
import React from 'react'

interface Iprops{
    nav:string
}
const Button = ({nav}:Iprops) => {
  return (
    <div className={ `flex justify-center items-center relative z-1 ${arabicFontMeduim.className} `}>
          <Link href={`${nav}`} >
          <p className='bg-main border-blur text-xxs md:text-sm text-white    px-6 py-2 rounded-3xl   hover:px-10 duration-150 transition-all'>

            أستكشف المزيد 
          </p>
          </Link>

        </div>
  )
}

export default Button