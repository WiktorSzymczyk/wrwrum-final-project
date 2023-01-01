import React from "react";
import Image from "../../library/Image";

export default function SingleConstructor(props: {name: String, chief: String, powerUnit: String, img: any, d1Name: String, d2Name: String, chasis: String, first: String, world: String}) {
  return (
    <div className="bg-[#232323] flex justify-center mb-5">
      <div>
        <div className="p-10">  
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="flex justify-center">
              <Image placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load' className="w-[50%]" src={props.img} alt=''/>
            </div>
            <div className="px-6 py-4 bg-[#161616]">
              <div className="font-bold text-3xl mb-2 text-white">
                {props.name}
              </div>
              <p className="text-gray-300 font-bold text-2xl">
                {props.chief}
              </p>
              <p className="text-gray-300 text-base">
                {props.powerUnit}
              </p>
              <div className="font-bold text-xl mb-2 mt-4 text-white">
                Drivers
              </div>
              <p className="text-gray-300 text-base">
                {props.d1Name}
              </p>
              <p className="text-gray-300 text-base">
                {props.d2Name}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-[#161616]">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.chasis}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.first}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.world} Championships</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
