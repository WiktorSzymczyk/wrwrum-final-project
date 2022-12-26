import React from 'react'
import data2021 from '../Datas/2021/drivers.json'
import data2022 from '../Datas/2022/drivers.json'
import data2023 from '../Datas/2023/drivers.json'
import SingleDriver from './SingleDriver';

export default function Drivers() {
  return (
      <div className='flex flex-col 
                    items-center justify-center'>
      {data2023.driver.map((res) => (
            <div key={res.id}>
              <SingleDriver
                img={res.img}
                Name={res.name + " " + res.surname}
                no={res.no}
                team={res.team}
                country={res.country}
                pob={res.pob}
                dob={res.dob}
                points={res.points}
              />
            </div>
          ))}
      </div>
  )
}
