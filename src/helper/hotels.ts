import Jimy from './../Images/Hotels/Jimmy/jimmy.png'
import Rocketa from './../Images/Hotels/Rocketa/Rocketa.png'
import tree from './../Images/Hotels/Tree House/tree.png'
import Lidia from './../Images/Hotels/Lidia/Lidia.png'
import laguna from './../Images/Hotels/laguna/laguna.png'
import Ecotel  from './../Images/Hotels/Ecotel Dahab/Ecotelp.png'
import golden  from './../Images/Hotels/Golden Heights/Golden.png'

import { FaWifi, FaSwimmingPool, FaUtensils, FaCar, FaSpa, FaCampground, FaFire, FaWater } from 'react-icons/fa';

export const Hotels = [
  {
    name: 'فندق جيمي',
    img: Jimy,
    price: 550,
    description: 'يقع فندق جيمي في منطقة المشربة في دهب، ويوفر أجواءً مريحة على بعد خطوات من الشاطئ. يتميز الفندق بالراحة والقرب من مواقع الغوص الشهيرة.',
    location: 'المشربة، دهب',
    services: [FaWifi , FaSwimmingPool , FaUtensils ]  
  },
  {
    name: 'فندق روكيتا',
    img: Rocketa,
    price: 550,
    description: 'فندق روكيتا هو خيار اقتصادي يقع بالقرب من قلب دهب. يوفر إقامة بسيطة للمسافرين الذين يرغبون في الاستمتاع بالغوص والغطس بأسعار معقولة.',
    location: 'وسط دهب',
    services: [FaWifi , FaCar , FaSwimmingPool ]  
  },
  {
    name: 'فندق تري هاوس',
    img: tree,
    price: 400,
    description: 'يتميز فندق تري هاوس بتصميمه الفريد من نوعه، ويقدم تجربة إقامة مميزة بين الأشجار في دهب.',
    location: 'المشربة، دهب',
    services: [FaCar , FaFire , FaCampground ]  
  },
  {
    name: 'فندق ليديا',
    img: Lidia,
    price: 500,
    description: 'فندق ليديا هو خيار مثالي للمسافرين الباحثين عن تجربة هادئة مع إطلالات جميلة على البحر في دهب.',
    location: 'منطقة اللايت هاوس، دهب',
    services: [FaWater , FaWifi , FaUtensils ]  
  },
  {
    name: 'فندق دهب لاجون',
    img: laguna,
    price: 1250,
    description: 'فندق دهب لاجون يوفر إقامة فاخرة في دهب مع إطلالات خلابة على اللاجون ومرافق راقية للضيوف الذين يبحثون عن تجربة راقية.',
    location: 'اللاجون، دهب',
    services: [FaSwimmingPool , FaSpa , FaCampground ] 
  },
  {
    name: 'فندق إيكوتيل دهب',
    img: Ecotel,
    price: 1050,
    description: 'يعد فندق إيكوتيل من أفضل الفنادق في دهب، حيث يقدم خدمات صديقة للبيئة مع إطلالات جميلة على البحر.',
    location: 'المشربة، دهب',
    services: [FaSwimmingPool , FaWifi , FaSwimmingPool ] 
  },
  {
        name: 'فندق جولدن هايتس',
        img: golden,
        price: 800,
        description: 'جولدن هايتس هو فندق فخم يوفر إطلالات خلابة على البحر الأحمر ويضم مرافق فاخرة لراحة الضيوف.',
        location: 'شمال دهب',
        services: [FaSwimmingPool , FaUtensils , FaSwimmingPool ]  
      },
//   {
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
];
