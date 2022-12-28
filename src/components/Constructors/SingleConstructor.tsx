import React from "react";

export default function SingleConstructor(props: {name: String, chief: String, powerUnit: String, img: any, d1Name: String, d2Name: String, chasis: String, first: String, world: String}) {
  return (
    <div className="bg-stone-800 flex justify-center mb-5">
      {/* Basic data output */}
      {/* <div className="text-white">
        <div className="flex">
          <img src={props.img} alt="" className="w-40 justify-center" />
        </div>
        <h1 className="">{props.name}</h1>
        <div className="">
          <h1 className="text-xs">{props.d1Name}</h1>
          <h1 className="text-xs">{props.d2Name}</h1>
        </div>
      </div> */}
      {/* <div className="">
        <div className="text-white">
          <div className="">
            <h1>{props.name}</h1>
            <div className="flex justify-center">
              <img src={props.img} alt="" className="w-20 justify-center" />
            </div>
            <p>{props.d1Name}</p>
            <p>{props.d2Name}</p>
            <div className="w-[100%] border-2 border-white">
              <p className="text-sm">Chasis: {props.chasis}</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

        <div>
        <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex justify-center">
        <img className="w-[50%]" src={props.img} alt=''/>
      </div>
      <div className="px-6 py-4 bg-[#161616]">
        <div className="font-bold text-3xl mb-2 text-white">{props.name}</div>
        <p className="text-gray-300 font-bold text-2xl">
          {props.chief}
        </p>
        <p className="text-gray-300 text-base">
          {props.powerUnit}
        </p>
        <div className="font-bold text-xl mb-2 mt-4 text-white">Drivers</div>
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
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.world} Points</span>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
}
