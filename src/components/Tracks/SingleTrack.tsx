import React from "react";

interface TrackProps{
  name: any,
  img: any,
  country: String,
  distance: String,
  laps: String
}
export default function SingleTrack(props: TrackProps) {
  return <div className="text-white flex mb-[10%] bg-[#222222] w-[80%] float-right">
      <img src={props.img} className='w-[50%] object-contain justify-center' alt=''/>
      <div className='justify-center align-start text-start' >
        <h1 className="font-bold text-sm md:text-xl">{props.name}</h1>
        <h1 className="font-light text-sm md:font-semibold md:text-md">{props.country}</h1>
        <h2 className="font-medium md:font-semibold text-md pt-5 pb-1">Details</h2>
        <h1 className="font-light md:font-normal text-sm md:text-md text-md">Distance: {props.distance}km</h1>
        <h1 className="font-light md:font-normal text-sm md:text-md text-md" >Laps: {props.laps}</h1>
      </div>
    </div>
}
