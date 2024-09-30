import RahalComponents from "./components/Destinations/RahalComponents";
import Hero from "./components/Hero/Hero";
import Most from "./components/MostOrderd/Most";
import { BestDestination } from '@/helper/DestinatinsData';
import Advan from "./components/Advan/Advan";
import Steps from "./components/Steps/Steps";
import ContactUs from "./components/ContactUs/ContactUs";
import Framer from "./components/StlyesComponents/Framer";


export default function Home() {
  return (
    <> 
      <Hero/>
    <section className="flex flex-col items-center justify-center  bg-white   ">

      <Framer time={100}>
      <Steps/>
      <Advan/>
      </Framer>
      

      <RahalComponents BestDestination={BestDestination} time={5000} title="أفضل الوجهات السياحية " style={false}/>
      <Most/>
      <ContactUs/>
    </section>

    </>
  );
}
