import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ConstructorPage from "./components/ConstructorPage";
import SingleConstructor from "./components/SingleConstructor";
import Tracks from "./components/Tracks";
import SingleTrack from "./components/SingleTrack";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-[#151515] display-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constructors" element={<ConstructorPage />} />
        <Route path="/constructors/:id" element={<SingleConstructor />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/tracks/:id" element={<SingleTrack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
