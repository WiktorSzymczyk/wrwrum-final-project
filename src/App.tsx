import React, {useEffect, useState} from "react";
import "./App.css";
import {getNews} from "./services/newsApi";


function App() {

  //api testing
 const [newsFeed, setNewsFeed] = useState(null); 

useEffect(() => {
 getNews().then(res => setNewsFeed(res))
 
  }, [])
  console.log(newsFeed)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      
    </div>
  );
}

export default App;
