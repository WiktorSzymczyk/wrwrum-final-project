import React from "react";
import Image from "../../library/Image";

export default function SingleTrack(props: {name: any, img: any, country: String, distance: String, firstGrandPrix: String, circuitLength: String, laps: String, lapRecordTime: String, lapRecordSeason: String, lapRecordDriver: String}) {
  return (
    <div>
      <div className="p-10">  
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load' className="w-full bg-white" src={props.img} alt="" />
          <div className="px-6 py-4 bg-[#161616]">
            <div className="font-bold text-2xl mb-2 text-white">{props.name}</div>
            
            <p className="text-gray-300 font-bold text-xl">
              {props.country}
            </p>

            <p className="text-gray-300 text-base">
            Circuit Length: <span className="font-medium">{props.circuitLength} km</span>
            </p>

            <p className="text-gray-300 text-base">
              Race Distance: <span className="font-medium">{props.distance} km</span>
            </p>

            <p className="text-gray-300 text-base">
              Laps: <span className="font-medium">{props.laps}</span>
            </p>

          </div>
          <h1 className="text-white">LAP RECORD</h1>
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
