import React from 'react'

interface Iporparites {
    clas: string;
  }
export const Wave = ({clas} : Iporparites ) => {
  return (
    <>
     <div className={` ${clas} `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 100" width="100%" height="100" preserveAspectRatio="none">
  <path d="M 0 50 Q 32 50 64 25 Q 128 -25 192 25 Q 224 50 256 50 Q 288 50 320 25 Q 384 -25 448 25 Q 480 50 512 50 Q 544 50 576 25 Q 640 -25 704 25 Q 736 50 768 50 Q 800 50 832 25 Q 896 -25 960 25 Q 992 50 1024 50 Q 1056 50 1088 25 Q 1152 -25 1216 25 Q 1248 50 1280 50 L 1280 100 L 0 100 Z" fill="#ffffff"></path>
</svg>

        </div>
    
    
    
    
    
    
    </>
  )
}
