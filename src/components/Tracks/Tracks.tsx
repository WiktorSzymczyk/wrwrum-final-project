import React, {useState} from "react";
import data1 from '../Datas/2021/circuit.json'
import data2 from '../Datas/2022/circuit.json'
import data3 from '../Datas/2023/circuit.json'
import SingleTrack from './SingleTrack';

export default function Tracks() {
   
  return (
  <>
  <div className="pt-10">
    <select className="mb-5 mr-5">
      <option value='2023'>Current</option>
      <option value='2022'>2022</option>
      <option value='2021'>2021</option>
    </select>

    <div className="pr-[15%] md:pr-[15%] lg:pr-[10%]">
          {data3.circuit.map((res) => (
            <div key={res.id}>
              <SingleTrack
                name={res.name}
                img={res.img}
                country={res.country}
                distance={res.raceDistance}
                laps={res.numberOfLaps}
              />
            </div>
          ))}
          <div className="flex flex-col float-end">
            <h1 className="flex-col">sda</h1>
          </div>
        </div>
      </div>
    </>)
}
