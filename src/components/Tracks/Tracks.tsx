import React, {useState, useEffect} from "react";
import d2021 from '../Datas/2021/circuit.json'
import d2022 from '../Datas/2022/circuit.json'
import d2023 from '../Datas/2023/circuit.json'
import SingleTrack from './SingleTrack';

export default function Tracks() {
   const [data, setData] = useState(d2023)

   useEffect(() => {
         console.log(data)
      }, [data])
      
  return ( 
  <>
  <div className="pt-10 bg-[#151515]">
    <select className="mb-5 mr-5" onChange={(e) => console.log(e.target.value)}>
      <option value='2023' onClick={() => setData(d2023) }>Current</option>
      <option value='2022' onClick={() => setData(d2022) }>2022</option>
      <option value='2021' onClick={() => setData(d2021) }>2021</option>
    </select>

          {data.circuit.map((res) => (
            <div key={res.id}>
              <SingleTrack
                name={res.name}
                img={res.img}
                country={res.country}
                distance={res.raceDistance}
                laps={res.numberOfLaps}
                firstGrandPrix={res.firstGrandPrix}
                lapRecordDriver={res.lapRecordDriver}
                lapRecordSeason={res.lapRecordSeason}
                lapRecordTime={res.lapRecordTime}
                circuitLength={res.circuitLength}
              />
            </div>
          ))}
      </div>
    </>)
}
