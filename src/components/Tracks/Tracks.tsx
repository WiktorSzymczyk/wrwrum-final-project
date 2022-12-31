import React, {useState, useEffect} from "react";
import d2021 from '../../Datas/2021/circuits.json'
import d2022 from '../../Datas/2022/circuits.json'
import d2023 from '../../Datas/2023/circuits.json'
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

      <div className="grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {d2023.circuit.map((res:any) => (
          <div key={res.id} >
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
      </div>
    </>
  )
}
