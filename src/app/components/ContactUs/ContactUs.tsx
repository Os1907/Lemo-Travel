'use client';
import { arabicFont } from '@/helper/font';
import React, { useRef, useState } from 'react';

const ContactUs = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const [status, setStatus] = useState(true)

    const sendData = async (mail: string | undefined) => {
        const send = await fetch('https://formspree.io/f/mnnakdby', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: mail,
                message: "Please send to me all offers ! ",
            }),
        });
        
    
        if (send.ok) {
          
            if (emailRef.current) {
                emailRef.current.value = ''
            }
            setStatus(false)

           
            setTimeout(() => {
                setStatus(true)

            }, 3000); 
        } 
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData(emailRef.current?.value);
    };

    return (
        <section className='py-5'>
            <div className="mx-auto w-full max-w-7xl px-5 relative ">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className={`mb-4 text-xl lg:text-3xl font-bold text-main md:text-5xl ${arabicFont.className}`}>
                        أستكشف معانا أفضل العروض حصرياً
                    </h2>
                    {
                        status ? <div className="mx-auto mb-4 flex max-w-xl justify-center ">
                        <form  onSubmit={submitForm} className="relative w-3/4 mx-auto border border-solid border-main rounded-full flex p-1 ">
                            <input
                                ref={emailRef}
                                type="email"
                                className=" w-3/4  bg-white px-3  text-sm text-main rounded-full active:outline-none focus:outline-none"
                                placeholder="بريدك الآلكتروني"
                            />
                            <button type="submit" className={` ${arabicFont.className}  w-1/4  bg-main  py-2 text-center font-semibold text-white  rounded-full text-xs lg:text-sm`}>
                                أشترك
                            </button>
                        </form>
                    </div>:
                        <div className="mt-4 text-lg font-semibold bg-main hover:bg-blue-900 text-white  w-1/4 rounded-full mx-auto shadow-2xl shadow-main py-2   ">
                            <p dir='rtl' className={`${arabicFont.className}`}>
                            تم الاشتراك بنجاح !
                            </p>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
