import React from "react";
import SingleTrack from "./SingleTrack";
import data from "./Datas/Circuit.json";

export default function Tracks() {
  return (
    <>
      <div>
        <div className="flex flex-col w-20 text-white pt-5 pb-5">
          <select className="bg-transparent border-2 border-[#00FF59] rounded-[6px]">
            <option value="2023">Current</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        {data.Circuit.map((res) => (
          <div key={res.id}>
            <SingleTrack
              name={res.name}
              country={res.country}
              img={res.img}
              first={res.firstGrandPrix}
              circuitLength={res.circuitLength}
              raceDistance={res.raceDistance}
              numberOfLaps={res.numberOfLaps}
              lapRecordTime={res.lapRecordTime}
              lapRecordDriver={res.lapRecordDriver}
              lapRecordSeason={res.lapRecordSeason}
            />
          </div>
        ))}
      </div>
    </>
  );
}
