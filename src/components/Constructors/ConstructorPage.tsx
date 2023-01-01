import React, { useState } from "react";
import SingleConstructor from "./SingleConstructor";
import data1 from "../../datas/2021/teams.json";
import data2 from "../../datas/2022/teams.json";
import data3 from "../../datas/2023/teams.json"

export default function ConstructorPage() {
  return (
    <>
      <div className="p-10 grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {data3.teams.map((res) => (
          <div key={res.id}>
            <SingleConstructor
              name={res.Name}
              chief={res.TeamChief}
              powerUnit={res.PowerUnit}
              img={res.img}
              d1Name={res.Drivers[0].Name + " " + res.Drivers[0].Surname}
              d2Name={res.Drivers[1].Name + " " + res.Drivers[1].Surname}
              chasis={res.Chasis}
              first={res.FirstTeamEntry}
              world={res.WorldChampionships}
            />
          </div>
        ))}
      </div>
    </>
  )
}
