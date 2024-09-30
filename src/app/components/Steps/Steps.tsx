'use client'
import { arabicFont } from "@/helper/font";
import { useState, useEffect } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Dots from "../StlyesComponents/Dots";
import Title from "../title/title";

export default function Steps() {
  const steps = [
    { number: 1, title: "أختار ما يناسبك " },
    { number: 2, title: " تأكيد الحجز " },
    { number: 3, title: "أحزم حقائبك" },
    { number: 4, title: "أنطلق وأستمتع " },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) =>
        prev > steps.length ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval); 
  }, [steps.length]);

  return (
    <div className={`w-full  pb-3 pt-10 lg:py-16  bg-white rounded-t-[2.5rem] ${arabicFont.className} relative `}>
                    <Dots />
                    <Title title={"الخطوات"} />
      <div dir="rtl" className="flex items-center justify-center relative z-4 md:flex-row flex-col    mx-4 gap-y-10 pb-3   pt-5 lg:pt-2  ">
        {steps.map((step, index) => (
          <div key={step.number} className={`flex  items-center    w-36 md:w-auto    `}>
            <div className="relative  ">
              <div
                className={`h-6 lg:h-12 w-6 lg:w-12 rounded-full border-2 flex items-center justify-center duration-500  ${
                  step.number <= currentStep
                    ? "border-main bg-main scale-105 lg:scale-125 "
                    : ""
                }
                

                `}
              >
                <span
                  className={` text-xs md:text-sm lg:text-lg ${
                    step.number <= currentStep ? "text-white" : "text-main"
                  } font-bold enFont`}
                >
                  {step.number}
                </span>
              </div>
              {step.number <= currentStep && (
                <div className="absolute text-xs md:text-sm lg:text-base -bottom-6 lg:-bottom-8 left-0 right-0 flex justify-center">
                  <IoCheckmarkDoneOutline className="text-main" />
                </div>
              )}
            </div>
            <div
              className={` font-medium mx-3 text-nowrap w-auto text-lg md:text-xl lg:text-2xl  ${
                step.number >= currentStep ? "text-gray-400  "  : "text-main "
              }`}
            >
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-full mx-2 transition-all duration-500 hidden lg:block ${
                  step.number < currentStep ? "bg-black" : "bg-gray-300"
                }`}
             
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}