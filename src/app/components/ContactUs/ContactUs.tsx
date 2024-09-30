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
                    <h2 className={`mb-4 text-3xl font-bold text-main md:text-5xl ${arabicFont.className}`}>
                        أستكشف معانا أفضل العروض حصرياً
                    </h2>
                    {
                        status ? <div className="mx-auto mb-4 flex max-w-xl justify-center py-5">
                        <form onSubmit={submitForm} className="relative w-full max-w-lg">
                            <input
                                ref={emailRef}
                                type="email"
                                className="h-9 w-full border border-solid border-main bg-white px-3 py-4 lg:py-6 text-sm text-main rounded-full active:outline-none focus:outline-none"
                                placeholder="Enter your email"
                            />
                            <button type="submit" className="relative right-0 top-1 w-full cursor-pointer bg-main px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto rounded-full">
                                Subscribe
                            </button>
                        </form>
                    </div>:
                        <div className="mt-4 text-lg font-semibold bg-main  text-white  w-1/4 rounded-full mx-auto shadow-2xl shadow-main py-2   ">
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
