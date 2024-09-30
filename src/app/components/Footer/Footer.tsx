import React from 'react'
import logo from '../../../Images/logo.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <footer className=" bg-main text-white items-center p-4">
                <div className="grid grid-cols-2 ">
                    <div className="col-span-2 lg:col-span-1 flex flex-col lg:flex-row items-center  gap-x-3 ">
                    <Image src={logo} alt="logo" width={180} height={180} className='w-14' />
                    <p className='enFont text-white text-sm font-medium'>Copyright © 2024 - All right reserved</p>
                    </div>
                    <div className="col-span-2 lg:col-span-1  flex justify-center lg:justify-end items-center">

                   <p className='enFont text-white font-medium'>
                   Made with love ❤️
                   </p>
                    </div>

                </div>
               
            </footer>




        </>
    )
}

export default Footer