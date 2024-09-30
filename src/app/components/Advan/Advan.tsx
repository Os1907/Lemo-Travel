import React from 'react'
import Title from '../title/title'
import { arabicFont, arabicFontMeduim  } from '@/helper/font'
import { BestTrip } from '@/helper/DestinationTrip'
import Image from 'next/image'
import Dots from '../StlyesComponents/Dots'

const Advan = () => {
  return (
    <>
    <section className='relative z-5 w-full bg -blur -white  py-5 '>
        <Dots/>
        <div dir='rtl' className='grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-20 relative z-2' >
            <div className= {`col-span-1 ${arabicFont.className} flex flex-col justify-center lg:items-start ml-4 py-10 `}>
                <Title title="أفضل الآنشطة"/>
                <p className={` text-sm lg:text-md text-center lg:text-start text-black  ${arabicFontMeduim.className} `}>
                اكتشف سحر دهب بين رحلات السفاري المثيرة، الغوص في أعماق الأزرق العميق، واستكشاف الشعاب المرجانية الخلابة. 
                 استمتع بمغامرات لا تُنسى وسط الجبال والرمال الذهبية، وركوب الجمال أو الخيل لتجربة مليئة بالتشويق! 
                </p>
            </div>
            <div className="col-span-1 relative">
                
            <div className="grid grid-cols-4 grid-rows-6 gap-4 lg:gap-4">
            {BestTrip.map((trip, index) => (
                <div
                    key={index}
                    className={`relative ${
                        index === 0
                            ? "  col-span-2 row-span-2"
                            : index === 1
                            ? "  col-span-2 row-span-2 col-start-3"
                            : index === 2
                            ? "  col-span-2 row-span-2 col-start-2 row-start-3"
                            : index === 3
                            ? "  row-span-2 col-start-1 row-start-3"
                            : index === 4
                            ? "  col-span-2 row-span-2 col-start-1 row-start-5"
                            : index === 5
                            ? "  col-span-2 row-span-2 col-start-3 row-start-5"
                            : "  row-span-2 col-start-4 row-start-3"
                    }  group`}
                >
                    <div className='  rounded-3xl overflow-hidden'>

                    <Image src={String(trip.image.src)} width={550} height={550} alt={trip.name} className="w-full h-28 md:h-32 lg:h-44 object-cover rounded-3xl group-hover:scale-105 duration-500" />
                    </div>
                    {/* <div className="absolute top-0 h-full right-0  w-full hidden group-hover:flex items-center justify-center bg-main bg-opacity-75 text-main    font-bold rounded-3xl">
                        <p className={`text-sm ${arabicFontNormal.className} `}>

                        {trip.name}
                        </p>
                    </div> */}
                </div>
            ))}
    
    
            </div>
            {/* <Plan clas='absolute top-0 h-full right-0 z-3 ' /> */}
            </div>
        </div>

    </section>
    
    
    </>
  )
}

export default Advan