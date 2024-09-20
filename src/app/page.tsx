// import { BestTrip } from "@/helper/DestinationTrip";
import RahalComponents from "./components/Destinations/RahalComponents";
import Hero from "./components/Hero/Hero";
import Most from "./components/MostOrderd/Most";
import { BestDestination } from '@/helper/DestinatinsData';
import Advan from "./components/Advan/Advan";
import Steps from "./components/Steps/Steps";
import Framer from "./components/StlyesComponents/Framer";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hero relative">
      <Hero/>
      <Steps/>

      <Framer time={300}>
      <Advan/>
      </Framer>

      <RahalComponents BestDestination={BestDestination} time={5000} title="أفضل الوجهات السياحية " style={false}/>
      {/* <RahalComponents BestDestination={BestTrip} time={12000} title="أفضل الآنشطه   "  style={true}/> */}
      
      <Most/>
    </div>

    
  );
}
