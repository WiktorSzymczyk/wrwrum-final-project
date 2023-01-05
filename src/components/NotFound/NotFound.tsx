import React from "react";
import f1 from '../../assets/media/img/f1drawing.png'

export default function NotFound() {
  return (
    <div className="flex flex-col text-white bg-[#222] h-[100vh] w-[100vw]">
      <div className="pt-40 flex items-center justify-center h-screen">
        <img src={f1} alt='' className="w-[50vw] h-min" />
      </div>
      <div className='flex-col items-center justify-center h-screen'>
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  )
}
