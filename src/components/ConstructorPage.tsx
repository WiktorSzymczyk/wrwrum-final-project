import React, { useState } from "react";
import SingleConstructor from "./SingleConstructor";
import data from "./Datas/Teams.json";

export default function ConstructorPage() {
  // const [data, setData] = useState([]);

  // const teams = JSON.parse();

  return (
    <>
      <div className="">
        {/* {JSON.stringify(teams[0].Constructor[0].Name)} */}
        {/* {teams.map((t, i) => {
          <SingleConstructor
            name={t.Constructor[i].Name}
            base={t.Constructor[i].Base}
          />;
        })} */}
        {/* <SingleConstructor
          name={teams[0].Constructor[0].Name}
          base={teams[0].Constructor[0].Base}
        /> */}
        {/* {teams[0].Constructor.map((team) => {})} */}
        {/* {teams.map((team) => {
          return <h1 className="text-white">{team[0].Name}</h1>;
        })} */}
        {/* {teams.map((team, index) => {
          return <h1 className="text-white">{team[0].Name}</h1>;
        })} */}

        {/* grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
        lg:gap-8 p- */}

        <div className="5">
          {data.Teams.map((res) => (
            <div key={res.id}>
              <SingleConstructor
                name={res.Name}
                chief={res.TeamChief}
                powerUnit={res.PowerUnit}
                img={res.img}
                d1Name={res.Drivers[0].Name + " " + res.Drivers[0].Surname}
                d2Name={res.Drivers[1].Name + " " + res.Drivers[1].Surname}
                chasis={res.Chasis}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
