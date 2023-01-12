import './App.scss';
import './assets/styles/share/modalStyle.scss';
import './assets/styles/share/mediumButton.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ConstructorPage from './components/Constructors/ConstructorPage';
import SingleConstructor from './components/Constructors/SingleConstructor';
import Tracks from './components/Tracks/Tracks';
import SingleTrack from './components/Tracks/SingleTrack';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Drivers from './components/Drivers/Drivers';
import Standings from './components/Standings/Standings';
import StandingsPage from './components/Standings/StandingsPage';
import DriversInformation from './components/Drivers/DriversInformation';
import KidsZone from './pages/KidsZone';
import KidsZoneIndex from './pages/KidsZoneIndex';
import MemoryGame from './pages/MemoryGame';
import SingleConstructorDetails from './components/Constructors/SingleConstructorDetails';
import Chat from './components/Chat/Chat';

function App() {
	return (
		<div className='App bg-main-bg display-cover max-w-[100vw] z-10'>
			<div className='flex w-full'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/constructors'
						element={<ConstructorPage />}
					/>
					<Route
						path='/constructors/:id'
						element={
							<SingleConstructor
								name=''
								chief=''
								powerUnit=''
								img=''
								d1Name=''
								d2Name=''
								chasis=''
								world=''
								first=''
								idInfo=''
							/>
						}
					/>
					<Route
						path='/drivers'
						element={<Drivers />}
					/>
					<Route
						path='/tracks/:year'
						element={<Tracks />}
					/>
					<Route
						path='/standings'
						element={<StandingsPage />}
					/>
					<Route
						path='/standings/team'
						element={<Standings team={false} />}
					/>
					<Route
						path='/tracks/:id'
						element={
							<SingleTrack
								name=''
								img=''
								country=''
								distance=''
								laps=''
								firstGrandPrix=''
								lapRecordDriver=''
								lapRecordSeason=''
								circuitLength=''
								lapRecordTime=''
							/>
						}
					/>

					<Route
						path='drivers/:name/:id'
						element={<DriversInformation />}
					/>

					<Route
						path='constructors/:name/:id'
						element={<SingleConstructorDetails />}
					/>

					<Route
						path='*'
						element={<NotFound />}
					/>

					<Route
						path='/chat'
						element={<Chat />}
					/>

					<Route
						path='kidszone'
						element={<KidsZone />}
					>
						<Route
							index
							element={<KidsZoneIndex />}
						/>
						<Route
							path='memorygame'
							element={<MemoryGame />}
						/>
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
