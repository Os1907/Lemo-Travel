import { arabicFont } from '@/helper/font'
import Image from 'next/image'
import React from 'react'
import Dots from '../components/StlyesComponents/Dots'
import Logo from '../../Images/logo.png'
import vector from '../../Images/lins.svg'

const page = () => {
  return (
    <>
      <section className={`min-h-screen bg-white  relative py-32 overflow-hidden ${arabicFont.className} `}>

        <Image src={vector} alt="" className='absolute  w-full h-full' />
        <div>
          <div dir='rtl' className="mx-auto w-full max-w-7xl px-5 py-2  md:px-10 md:py-0 relative">
            <Dots />
            <div className="relative z-3 text-center">

              <h2 className={`mb-4 text-4xl text-main md:text-5xl lg:text-8xl ${arabicFont.className}`}>
                من نحن ؟
              </h2>
              <p className="  text-sm text-black sm:text-base mb-3 text-center">
                نبذة تعريفية عن الشركة
              </p>
              <p className="  text-sm text-black sm:text-base mb-6 text-center">
                <span className='mx-1'>
                  تأسست
                </span>  شركة ليمو ترافيل 2018 لتكون الخيار الأول لعشاق السياحة في مدينة دهب الساحرة .
              </p>
              <div className="grid grid-cols-2 gap-10 lg:grid-cols-2 lg:gap-12">
                <div className="bg-main col-span-2 lg:col-span-1 p-4 flex justify-center items-center rounded-2xl shadow-xl">

                  <Image
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 rounded-2xl bg-white shadow-xl p-10 sm:p-20 duration-300  hover:border hover:border-main">
                  <h2 className={`text-3xl font-bold md:text-5xl lg:text-7xl text-main `}>هدفنا </h2>
                  <p className="text-sm text-black  sm:text-base">
                    تمتع الشركة بامتياز كبير في تقديم خدمات سياحية متكاملة تتناسب مع احتياجات الزوار من جميع الفئات .
                    نحن نقدم جولات سياحية مخصصة تشمل الغوص، ورياضات البحر، والجولات الثقافية،
                    والاماكن الترفيهيه  بالإضافة إلى تنظيم رحلات استكشافية إلى المعالم الطبيعية الخلابة في المنطقة.
                    فريقنا المتخصص يتكون من مرشدين محليين ذوي خبرة، يضمنون تجربة فريدة وآمنة لكل ضيف. نسعى دائمًا لتقديم خدمات عالية الجودة، مع التركيز على توفير تجارب مخصصة تجعل كل رحلة مميزة. نحن نؤمن بأن كل لحظة في دهب تستحق أن تُعاش بأفضل طريقة ممكنة.
                    انضم إلينا لاستكشاف جمال دهب واكتشاف مغامرات لا تُنسى

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>




    </>
  )
}

export default page