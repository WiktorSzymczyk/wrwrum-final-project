import React from "react";

interface TeamData {
  name: String;
  chief: String;
  powerUnit: String;
  img: any;
  d1Name: String;
  d2Name: String;
  chasis: String;
}

export default function SingleConstructor(props: TeamData) {
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
      <div className="">
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
    </div>
  );
}
