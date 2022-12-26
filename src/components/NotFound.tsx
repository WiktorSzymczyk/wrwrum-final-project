import React from "react";
import f1 from './Media/img/f1drawing.png'

export default function NotFound() {
  return (
    <div className="flex flex-col text-white bg-[#222] h-[100vh] w-[100vw]">
      <img src={f1} alt='' className="w-[50vw] h-min" />
      <div className='flex-col'>
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  )
}
