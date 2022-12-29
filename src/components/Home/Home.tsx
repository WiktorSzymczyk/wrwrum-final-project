import React from "react";

export default function Home() {
  return (
    <div className="w-full px-20">
      <img src='https://www.dhl.com/content/dam/dhl/global/delivered/images/social-share-1200x630/g168-dl-formula-1-season-2022-racing-car.jpg' className='hidden md:block w-[100vw] h-[25vh] py-10 object-cover' alt='' />
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#00ff5e]"></div>
          <span className="flex-shrink mx-4 text-white text-2xl font-bold">Content</span>
        <div className="flex-grow border-t border-[#00ff5e]"></div>
      </div>
    </div>
  )
}
