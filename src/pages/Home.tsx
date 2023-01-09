import React from "react";
import Image from "../library/Image";
import NewsContainer from "../components/News/NewsContainer";


export default function Home() {
  return (
    <>
    <div className="w-full px-10 pr-[15vw] md:pr-[3vw]">
      <Image src='https://www.dhl.com/content/dam/dhl/global/delivered/images/social-share-1200x630/g168-dl-formula-1-season-2022-racing-car.jpg' className='hidden md:block w-[100vw] h-[25vh] py-10 object-cover' alt='' />
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#00ff5e]"></div>
          <span className="flex-shrink mx-4 text-white text-2xl font-bold">DRIVERS</span>
        <div className="flex-grow border-t border-[#00ff5e]"></div>
      </div>
      <div className="grid grid-rows-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {/* ADD DRIVER CARDS FOR TOP 3 IF NOT NEXT 3 RACES */}
        </div>

      <div className="relative flex py-5 items-center py-5">
          <div className="flex-grow border-t border-[#00ff5e]"></div>
            <span className="flex-shrink mx-4 text-white text-2xl font-bold">NEWS</span>
          <div className="flex-grow border-t border-[#00ff5e]"></div>
        </div>
        
       

        <div>
          
          <NewsContainer/>
        </div>
      </div>
    </>   
  )
}
