import React from 'react';
import Head from 'next/head';
import Dots from '../components/StlyesComponents/Dots';
import Card from '../components/Card/Card';
import { Hotels } from '@/helper/hotels';
import Title from '../components/title/title';
import { arabicFont, arabicFontMeduim } from '@/helper/font';

const page = () => {
  return (
    <>
      <Head>
        <title>الفنادق - Lemo Travel</title>
        <meta
          name="description"
          content="استمتع بأفضل العروض في أشهر فنادق دهب مع Lemo Travel. اختر من بين مجموعة واسعة من الفنادق واستمتع بإقامة مميزة بأفضل الأسعار."
        />
        <meta
          name="keywords"
          content="فنادق, دهب, عروض فنادق, رحلات, سياحة, إقامة, Lemo Travel"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="الفنادق - Lemo Travel" />
        <meta
          property="og:description"
          content="استمتع بأفضل العروض في أشهر فنادق دهب مع Lemo Travel. اختر من بين مجموعة واسعة من الفنادق واستمتع بإقامة مميزة بأفضل الأسعار."
        />
        <meta property="og:image" content="" />//https://--.com/hotels-image.jpg
        <meta property="og:url" content="" />//https://--.com/hotels
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الفنادق - Lemo Travel" />
        <meta
          name="twitter:description"
          content="استمتع بأفضل العروض في أشهر فنادق دهب مع Lemo Travel. اختر من بين مجموعة واسعة من الفنادق واستمتع بإقامة مميزة بأفضل الأسعار."
        />
        <meta name="twitter:image" content="" /> //https://--.com/hotels-image.jpg

        <link rel="canonical" href="" />//https://---.com/hotels
      </Head>

      <section className={`min-h-screen bg-white relative pt-32 overflow-hidden ${arabicFont.className}`}>
        <Dots />
        <Title title={"الفنادق"} />
        <Card places={Hotels} />
        <div className='text-center text-xxs lg:text-sm my-5'>
          <span className={`text-main ${arabicFontMeduim.className}`}>
            جميع الآسعار تكون لليلة الواحدة
          </span>
        </div>
      </section>
    </>
  );
};

export default page;
