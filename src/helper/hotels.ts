import Jimy from './../Images/Hotels/Jimmy/jimmy.png'
import Rocketa from './../Images/Hotels/Rocketa/Rocketa.png'
import tree from './../Images/Hotels/Tree House/tree.png'
import amanda from './../Images/Hotels/amanda/amanda.png'
import laguna from './../Images/Hotels/laguna/laguna.png'
import Ecotel  from './../Images/Hotels/Ecotel Dahab/Ecotelp.png'
import red  from './../Images/Hotels/red/red.png'
import Canyon  from './../Images/Hotels/Canyon/Canyon.png'
import { FaWifi, FaSwimmingPool, FaUtensils, FaCar, FaSpa, FaCampground, FaFire, FaWater } from 'react-icons/fa';

export const Hotels = [
  {
    name: 'فندق جيمي',
    img: Jimy,
    price: 1250,
    description: 'يوفر أجواءً مريحة على بعد خطوات من البحر، يتميز الفندق بالراحة والقرب من مواقع الغوص الشهيرة.',
    location: 'المشربة، دهب',
    services: [FaWifi, FaSwimmingPool, FaUtensils],
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/245826802.jpg?k=d5734d4e2397c66d6b8fff25b175520fa13dafe33093b733f49e157f5fb02864&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161911163.jpg?k=dd7559995f1f9eb948a22eb04c3d6856f62afc64a60bac4d1bcd5d2b4814f377&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161911159.jpg?k=6e3c0189dcebdaab2c7bf13c554b7ab93e7523a2f3bcc0d70d6c72d3f87af2ed&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161911164.jpg?k=6db176600392fe68f5114318e1da2638ef0a6064a0e940364179c1472f05cb6d&o=&hp=1'
    ],
  },
  {
    name: 'فندق روكيتا',
    img: Rocketa,
    price: 1250,
    description: 'خيار اقتصادي يقع بالقرب من قلب دهب يوفر إقامة بسيطة للمسافرين الذين يرغبون في الاستمتاع بالغوص والغطس بأسعار معقولة.',
    location: 'وسط دهب',
    services: [FaWifi, FaCar, FaSwimmingPool],
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipN6GMvNNIQauadMeNhoTkDQbMZOQHKyjzApJRpE=s1360-w1360-h1020',
      'https://www.go4relax.com/uploads/0000/1/2024/05/23/whatsapp-image-2024-05-23-at-014942-ea4ffed3.jpg',
      'https://lh3.googleusercontent.com/p/AF1QipMNAvvcvC1tn3cyS1d5Ga5Iwd034WwrUG7jmTdu=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPngVs1THwsD2GqguwZHm1z8vN9M110z8LId0oC=s1360-w1360-h1020',
      'https://www.go4relax.com/uploads/0000/1/2024/05/23/whatsapp-image-2024-05-23-at-014941-b5f1ad0d.jpg',
      'https://www.go4relax.com/uploads/0000/1/2024/05/23/whatsapp-image-2024-05-23-at-014942-e8d74dfa.jpg',
      'https://rocketa-dahab-hotel.albooked.com/data/Photos/1920x1080/7054/705402/705402307/Rocketa-Dahab-Hotel-Exterior.JPEG',
    
    ],
  },
  {
    name: 'فندق تري هاوس',
    img: tree,
    price: 1000,
    description: 'يتميز فندق تري هاوس بتصميمه الفريد من نوعه، ويقدم تجربة إقامة مميزة بين الأشجار في دهب.',
    location: 'المشربة، دهب',
    services: [FaCar, FaFire, FaCampground],
    images: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-1224871083413538505/original/6c1dd189-e840-45f5-8d8f-eb710385efe6.jpeg?im_w=1200',
      'https://lh3.googleusercontent.com/p/AF1QipM7Xl4FFDFquqSMqS1u5Py2_CexUjIL9CZgqYhh=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipM2PI9t4a_-Du_cGCU9A5jU2aYlny6aEQlDh0wX=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNn2onncnho5MNgAoeeLQPFk-I9m-jEqtS8cMXV=s1360-w1360-h1020'
    ],
  },
  {
    name: 'فندق اماندا',
    img: amanda,
    price: 1200,
    description: 'فندق اماندا هو خيار مثالي للمسافرين الباحثين عن تجربة هادئة مع إطلالات جميلة على البحر في دهب.',
    location: 'منطقة اللايت هاوس، دهب',
    services: [FaWater, FaWifi, FaUtensils],
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/19/81/32/caption.jpg?w=1200&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/cd/9b/38/new-amanda-restaurant.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d0/85/42/caption.jpg?w=1200&h=-1&s=1'
     
    ],
  },
  {
    name: 'فندق دهب لاجون',
    img: laguna,
    price: 3050,
    description: 'فندق لاجون يوفر إقامة فاخرة في دهب مع إطلالات خلابة على اللاجون ومرافق راقية للضيوف الذين يبحثون عن تجربة راقية.',
    location: 'اللاجون، دهب',
    services: [FaSwimmingPool, FaSpa, FaCampground],
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/577720279.jpg?k=79be49f55336a234280cabb00914d14ab79592d504878f90d1a1dbdf8a7cf526&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/24444675.jpg?k=6267b044d7853b925b0e2ed031e61cc72cf1e965a2c43c17c56cf16afe3179e5&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/455612725.jpg?k=728e14059a00ff906239f7bdaeafef6f256bf0f055d95bbd408d93687572cdb1&o=&hp=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f3/de/57/20170326-091457-1328x747.jpg?w=1200&h=-1&s=1',
      'https://lagona-dahab-village.albooked.com/data/Photos/1920x1080/8133/813345/813345477/Lagona-Dahab-Village-Exterior.JPEG',
    ],
  },
  {
    name: 'فندق إيكوتيل دهب',
    img: Ecotel,
    price: 2800,
    description: 'يعد فندق إيكوتيل من أفضل الفنادق في دهب، حيث يقدم خدمات صديقة للبيئة مع إطلالات جميلة على البحر.',
    location: 'المشربة، دهب',
    services: [FaSwimmingPool, FaWifi, FaSwimmingPool],
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipNiPAihNQWziaNzsyjtk1KLee6MI4yqi4BgI8Fs=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMKZEV-LqHUKx45sL3mSVFlaWHn_dkr_bs_piCf=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOxflNBpkx8J8-EUHy8ZVW6Ositlop9gusl4eQ-=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPRF8vBDV2igI2Mw9OGUrafQykZewkIQzhhcBx8=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOqoSryc9H4cVU70xVEAfVJ_51qUIj0rYbTMqoI=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNi6k4pyJIleEdAqZyGkhYAUR21TGpeyTSN5bWp=s1360-w1360-h1020',
    ],
  },
  {
    name: 'فندق كلوب ريد',
    img: red,
    price: 1450,
    description: 'كلوب ريد هو فندق فخم يوفر إطلالات خلابة على البحر الأحمر ويضم مرافق فاخرة لراحة الضيوف.',
    location: 'الممشي',
    services: [FaSwimmingPool, FaUtensils, FaSwimmingPool],
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipMp4Q6AapZLugYrE9cQGSXFQSSyrjyi93RK8luA=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOHqvwjTUPojHi52kPrjO_Fj0KtZv6JIrTSzkzj=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNwSZ6aLm4KER1aRPtpeUZ_agH3p7UYjXUsoMuA=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPjXBAaZZl8E5JMvCxfQ3poYtnoDVfqHFWd_kBE=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipM3xbWcKxZV3vn5ZXKnwsGP0pHl28XG21i0u2Pm=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipORMQ2RjV8TAo4RjHTlrWMkoSsAhXqdTv3gUu10=s1360-w1360-h1020'
    ],
  },
  {
    name: 'فندق كانيون لاجون',
    img: Canyon,
    price: 1250,
    description: 'فندق كانيون لاجون يوفر تجربة مميزة للمسافرين مع تصميم عصري ومرافق رائعة.',
    location: 'الممشي',
    services: [FaSwimmingPool, FaUtensils, FaSwimmingPool],
    images: [
     'https://cf.bstatic.com/xdata/images/hotel/max1024x768/513590513.jpg?k=47c09e11513ebb15bbd3b2d2864a8602cf76de6f954492c2ed6e1a4663ca2521&o=&hp=1',
     'https://cf.bstatic.com/xdata/images/hotel/max1280x900/513574434.jpg?k=a5477fbf6a13403cfddbe651a346043d7a9f4ea34829a02719c91f021e69bce3&o=&hp=1',
     'https://lh3.googleusercontent.com/p/AF1QipPmfsO8trCBTLguMXSrlrxlP7bAkYW47M3kf8zP=s1360-w1360-h1020',
     'https://lh3.googleusercontent.com/p/AF1QipNMitFehOw25U21GlfoFuZe-7B6kZ2yTB61eBvt=s1360-w1360-h1020'
    ],
  },
];

//  {
//     name: 'كامب جارجبيتا',
//     img: '',
//     price: 350,
//     description: 'كامب جارجبيتا يوفر إقامة بأسعار معقولة وسط الطبيعة الخلابة في دهب، وهو مثالي للمسافرين الذين يبحثون عن تجربة تخييم مريحة.',
//     location: 'قرب جبل الطويلات، دهب',
//     services: [FaCampground , FaFire , FaWater ]  
//   },
//   {
//     name: 'كامب ستار دهب',
//     img: '',
//     price: 350,
//     description: 'كامب ستار هو خيار شعبي بين المسافرين الذين يفضلون البساطة والقرب من الشاطئ في دهب.',
//     location: 'قرب الشاطئ، دهب',
//     services: [FaFire , FaCar , FaWater ] 
//   },
//   {
//     name: 'كامب نيو لايف',
//     img: '',
//     price: 300,
//     description: 'كامب نيو لايف يوفر إقامة بأسعار مناسبة مع أجواء مريحة وجميلة بالقرب من الشاطئ في دهب.',
//     location: 'قرب الشاطئ، دهب',
//     services: [FaCar , FaUtensils , FaCampground ]  
//   },
//   {
//     name: 'جولدن هايتس',
//     img: '',
//     price: 800,
//     description: 'جولدن هايتس هو فندق فخم يوفر إطلالات خلابة على البحر الأحمر ويضم مرافق فاخرة لراحة الضيوف.',
//     location: 'شمال دهب',
//     services: [FaSwimmingPool , FaUtensils , FaSwimmingPool ]  
//   },
//   {
//     name: 'اريجاتو',
//     img: '',
//     price: 450,
//     description: 'فندق اريجاتو يقدم إقامة هادئة ومريحة بأسعار معقولة، مع خدمات ممتازة وقرب من الأنشطة الترفيهية في دهب.',
//     location: 'منطقة المسبط، دهب',
//     services: [FaWifi , FaCar , FaFire ]  
//   }