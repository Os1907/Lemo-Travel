import React from 'react'
import Plan from '../StlyesComponents/plan'

interface Iprop{
    title:string
}
const Title = ({title}:Iprop) => {
  return (
    <>
     <div className="relative z-5 mt-5 mb-10 flex justify-center items-center">
        <h2  className={`text-4xl lg:text-7xl  text-black  pb-3    inline-block `}>
     {title}

        </h2>
        <Plan clas={"absolute z-2 -top-20   "}/>
        </div>
    
    
    
    </>
  )
}

export default Title