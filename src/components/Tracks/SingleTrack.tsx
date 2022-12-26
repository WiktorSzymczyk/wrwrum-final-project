import React from "react";

interface TrackProps{
  name: any,
  img: any,
  country: String,
  distance: String,
  laps: String,
  firstGrandPrix: String
  lapRecordTime: String
  lapRecordDriver: String
  lapRecordSeason: String
  circuitLength: String
}
export default function SingleTrack(props: TrackProps) {
  return (
  // <div className="text-white flex mb-[10%] bg-[#222222] w-[80%] float-right">
  //     <img src={props.img} className='md:w-[50%] sm:w-[100vw] object-contain justify-center' alt=''/>
  //     <div className='justify-center align-start text-start' >
  //       <h1 className="font-bold text-sm md:text-xl">{props.name}</h1>
  //       <h1 className="font-light text-sm md:font-semibold md:text-md">{props.country}</h1>
  //       <h2 className="font-medium md:font-semibold text-md pt-5 pb-1">Details</h2>
  //       <h1 className="font-light md:font-normal text-sm md:text-md text-md">Distance: {props.distance}km</h1>
  //       <h1 className="font-light md:font-normal text-sm md:text-md text-md" >Laps: {props.laps}</h1>
  //     </div>
  //   </div>

        <div>
        <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.img} alt="" />
      <div className="px-6 py-4 bg-[#161616]">
        <div className="font-bold text-2xl mb-2 text-white">{props.name}</div>
        <p className="text-gray-300 font-bold text-xl">
          {props.country}
        </p>
        <p className="text-gray-300 text-base">
         Circuit Length: {props.circuitLength}
        </p>
        <p className="text-gray-300 text-base">
          Race Distance: {props.distance}
        </p>
        <p className="text-gray-300 text-base">
          Laps: {props.laps}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-[#161616]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.lapRecordTime}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.lapRecordSeason}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.lapRecordDriver}</span>
      </div>
    </div>
  </div>
    </div>
  )
}