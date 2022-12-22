import React from "react";
import { useParams } from "react-router-dom";

interface TrackData {
  name: String;
  country: String;
  img: any;
  first: String;
  circuitLength: String;
  raceDistance: String;
  numberOfLaps: String;
  lapRecordTime: String;
  lapRecordDriver: String;
  lapRecordSeason: String;
}

export default function SingleTrack(props: TrackData) {
  const { id } = useParams();

  return (
    <div className="text-white flex flex-col bg-stone-600 w-[70%] mb-5">
      <h1 className="font-bold text-xl">{props.name}</h1>
      <h1>{props.country}</h1>
      <div className="flex justify-center">
        <img src={props.img} className="w-[50%]" alt="" />
      </div>
      <h1 className="font-semibold text-xl">Details</h1>
      <hr />
      <div className="text-sm text-stone-200 font-lighter">
        First Grand Prix:
        <span className="font-lighter">{props.first}</span>
      </div>
      <h1 className="text-sm text-stone-200 font-lighter">
        Circuit Length:
        <span className="font-lighter">{props.circuitLength}km</span>
      </h1>
      <h1 className="text-sm text-stone-200 font-lighter">
        Race Distance:
        <span className="font-lighter">{props.raceDistance}km</span>
      </h1>
      <h1 className="text-sm text-stone-200 font-lighter">
        Number of Laps:
        <span className="font-lighter">{props.numberOfLaps}</span>
      </h1>
      <hr />
      <h1 className="text-sm text-stone-200 font-lighter">
        Lap Record Time:
        <span className="font-lighter">{props.lapRecordTime}</span>
      </h1>
      <h3 className="text-sm text-stone-200 font-lighter">
        <span className="font-lighter">{props.lapRecordDriver}</span>
      </h3>
      <h3 className="text-sm text-stone-200 font-light">
        {props.lapRecordSeason}
      </h3>
    </div>
  );
}
