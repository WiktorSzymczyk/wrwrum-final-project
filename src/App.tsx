import "./App.scss";
import "./assets/styles/share/modalStyle.scss";
import "./assets/styles/share/mediumButton.scss";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import ConstructorPage from './components/Constructors/ConstructorPage';
import SingleConstructor from './components/Constructors/SingleConstructor';
import Tracks from './components/Tracks/Tracks';
import SingleTrack from './components/Tracks/SingleTrack';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Drivers from './components/Drivers/Drivers';
import SingleDriverDetails from './components/Drivers/SingleDriverDetails';
import Standings from './components/Standings/Standings';
import StandingsPage from './components/Standings/StandingsPage';
import DriversInformation from './components/Drivers/DriversInformation';
import KidsZone from "./pages/KidsZone";
import KidsZoneIndex from "./pages/KidsZoneIndex";
import MemoryGame from "./pages/MemoryGame";

function App() {

  return (
    <div className="App bg-[#151515] display-cover max-w-[100vw]">
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constructors" element={<ConstructorPage />} />
          <Route
            path="/constructors/:id"
            element={
              <SingleConstructor
                name=""
                chief=""
                powerUnit=""
                img=""
                d1Name=""
                d2Name=""
                chasis=""
                world=''
                first=''
              />
            }
          />
          <Route path='/drivers' element={<Drivers />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/tracks/:id" element={<SingleTrack name=''
                img=''
                country=''
                distance=''
                laps=''
                firstGrandPrix=''
                lapRecordDriver=''
                lapRecordSeason=''
                circuitLength=''
                lapRecordTime=''/>} />  
          <Route path="kidszone" element={<KidsZone/>} >
            <Route index element={<KidsZoneIndex />} />
            <Route path="memorygame" element={<MemoryGame/>} />
          </Route>
         
          
      

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    // </div>
  );
}

export default App;
