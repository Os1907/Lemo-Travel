import { Ihotel } from '@/helper/interfaces'
import Image from 'next/image'
import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'

interface Iprop {
    places: Array<Ihotel>
}
const Card = ({ places }: Iprop) => {

    return (
        <>
            <div className="grid grid-cols-6 gap-2 lg:gap-5 relative z-2 mx-4 xl:mx-32 ">

                
                { 
                places.map(place => (
                    <div key={place.name + place.price} className="col-span-3 lg:col-span-2  group">
                        <div className="relative w-full    bg-black shadow-md rounded-3xl p-2 mx-1 my-3 \">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <Image alt={place.name}
                                    width={380}
                                    height={380} className=" h-52 lg:h-80 rounded-2xl w-full object-cover" src={String(place.img?.src)} />

                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-center relative    ">
                                <div>
                                    <p className="text-base lg:text-lg font-semibold text-white mb-0 text-center">   {place.name}</p>
                                    <p className="text-center text-gray-200 text-xxs lg:text-sm max-h-0 overflow-hidden duration-500 transition-all group-hover:max-h-40 ">{place.description}</p>
                                    <p className="text-center text-black bg-white text-xxs lg:text-sm max-h-0 overflow-hidden duration-500 transition-all group-hover:max-h-40 rounded-3xl w-3/4 mx-auto my-3  "><TiLocationArrow className='inline text-base' /> {place.location} </p>
                                </div>
                                <div className='absolute  -top-14 left-1/2 -translate-x-1/2  flex gap-x-2 ml-2 text-xs lg:text-sm max-h-0 overflow-hidden duration-500 transition-all group-hover:max-h-40 '>
                        {
                         place.services?.map((ServiceIcon, index) => {
                          
                            if (typeof ServiceIcon === 'function') {
                              return <span className='text-black bg-white inline-black px-2 py-1 rounded-3xl' key={`${index+Math.random()}`}><ServiceIcon/></span>
                            } else {
                              return null;
                            }
                          })}

                        </div>
                            </div>
                        <div className='absolute top-4 right-4 bg-white rounded-3xl '>
                                <p className='text-black py-1 px-3  text-xxs md:text-sm enFont font-semibold'>
                                  EGP  {place.price}       
                                </p>
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