
// import SingleConstructor from "./SingleConstructor";
import data from "./datas/Teams2.json";

export default function ConstructorPage() {



console.log(data.Teams)
  // let { teams } = data;
  // console.log(teams[0]?.[0].Name)

  



  return (
    <>
  <div>
   
     {data.Teams.map((res) => (
      <div key={res.id}>
        <h1 className="font-bold"> {res.Name}</h1>
        <h2>{res.TeamChief}</h2>
      </div>     
       ))}
  </div>
     


     

      
    

    </>
  );
}
