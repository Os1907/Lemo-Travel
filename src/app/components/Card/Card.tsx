import { arabicFontNormal } from '@/helper/font'
import { Ihotel } from '@/helper/interfaces'
import React from 'react'
import { IoLocation } from 'react-icons/io5'
import dynamic from "next/dynamic";
interface Iprop {
    places: Array<Ihotel>
}
const Card = ({ places }: Iprop) => {
    const ImageSwipe = dynamic(() => import("../ImageSwipe/ImageSwipe"), { ssr: false });
    return (
        <>
            <div dir='rtl' className="grid grid-cols-6 gap-3 lg:gap-5 relative z-4  xl:mx-32   ">


                {
                    places?.map((place, index) => (
                        <div key={place.name + place.price} className={`  p-2  shadow-md bg-white   group border-blur rounded-3xl
                            ${
                              places.length  ==  index+1 && places[index+1] === undefined && places.length % 2 != 0 ? "col-span-6 md:col-span-2 ":"col-span-3 md:col-span-2" 
                            }
                           
                            `}>
                            <div className="relative w-full      my-2 lg:my-3 ">
                                <div className="overflow-x-hidden rounded-2xl relative mx-2 lg:mx-3">
                                    <ImageSwipe images={place?.images} />

                                </div>
                                <div className="mt-4 pl-2 mb-2   relative     ">
                                    <div dir='rtl' className='w-full'>
                                        <p className="text-xs md:text-sm lg:text-lg font-semibold text-main   mb-0 text-center">  {place.name}</p>

                                        <p className={`text-center text-black  text-xxs lg:text-sm    ${arabicFontNormal.className} `}>{place.description}</p>
                                        <div className='flex justify-center md:justify-between items-center my-3 flex-wrap md:flex-row flex-col gap-y-2 lg:gap-y-0 '>
                                            <p className="text-start text-main   text-xxs lg:text-sm  rounded-3xl  "><IoLocation className='inline text-base text-main  ' /> {place.location} </p>
                                            <p className='bg-white border-blur text-main   rounded-3xl py-1 px-3  text-xxs md:text-sm enFont font-semibold'>
                                                EGP  {place.price}
                                            </p>
                                        </div>

                                    </div>

                                    <div className='absolute -top-12 lg:-top-14 left-1/2 -translate-x-1/2  flex gap-x-2 lg:ml-2 text-xs lg:text-sm  overflow-hidden duration-500 transition-all max-h-40 z-50 '>
                                        {
                                            place.services?.map((ServiceIcon, index) => {
                                                if (typeof ServiceIcon === 'function') {
                                                    return <span className='text-main text-xxs lg:text-base  bg-white border-blur inline-black px-2 py-1 rounded-3xl' key={`${index + Math.random()}`}><ServiceIcon /></span>
                                                } else {
                                                    return null;
                                                }
                                            })
                                        }

                                    </div>

                                </div>


                            </div>
                        </div>
                    ))
                }


            </div>





        </>
    )
}

export default Card