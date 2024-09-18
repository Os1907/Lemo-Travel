import React from 'react'
import Dots from '../components/StlyesComponents/Dots'
import Card from '../components/Card/Card'
import { Hotels } from '@/helper/hotels'
import Title from '../components/title/title'
import { arabicFont } from '@/helper/font'

const page = () => {
  return (
    <>
    <section className={`min-h-screen bg-white relative py-32 overflow-hidden ${arabicFont.className} `}>
        <Dots/>
        
        <Title title={"الفنادق"}/>
        <Card places={Hotels}/>

    </section>
    
    </>
  )
}

export default page