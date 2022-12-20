import React, { useState } from "react";
import SingleConstructor from "./SingleConstructor";
import teams from "./API/Teams.json";

export default function ConstructorPage() {
  const [data, setData] = useState([]);

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
        {JSON.stringify(teams)}
      </div>
    </>
  );
}
