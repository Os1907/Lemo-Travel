'use client'
import {  useInView } from "framer-motion";
import {  useRef } from "react";
interface Iporps{
  children: React.ReactNode
  time?:number
}
const Framer = ({ children ,time }  :Iporps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section   className="w-full  flex items-center justify-center bg -blur -white">
        <div  ref={ref} style={{
        transform: isInView ? "none" : `translateX(-${time }px)`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>

        {children}
        </div>
      </section>
    );
  }

export default Framer;
