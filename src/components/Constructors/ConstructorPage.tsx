import React, { useState } from "react";
import SingleConstructor from "./SingleConstructor";
import data1 from "../Datas/2021/teams.json";
import data2 from "../Datas/2022/teams.json";
import data3 from "../Datas/2023/teams.json";

export default function ConstructorPage() {
  return (
    <>

          <div className="flex flex-col justify-center">
          {data3.Teams.map((res) => (
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
  );
}
