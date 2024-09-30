// import { BestTrip } from "@/helper/DestinationTrip";
import RahalComponents from "./components/Destinations/RahalComponents";
import Hero from "./components/Hero/Hero";
import Most from "./components/MostOrderd/Most";
import { BestDestination } from '@/helper/DestinatinsData';
import Advan from "./components/Advan/Advan";
import Steps from "./components/Steps/Steps";
import ContactUs from "./components/ContactUs/ContactUs";


export default function Home() {
  return (
    <> 
      <Hero/>
    <section className="flex flex-col items-center justify-center  bg-white   ">

      <Steps/>
      {/* <Framer time={300}>
      </Framer> */}
      <Advan/>

      <RahalComponents BestDestination={BestDestination} time={5000} title="أفضل الوجهات السياحية " style={false}/>
      {/* <RahalComponents BestDestination={BestTrip} time={12000} title="أفضل الآنشطه   "  style={true}/> */}
      
      <Most/>
      <ContactUs/>
    </section>

    </>
  );
}
