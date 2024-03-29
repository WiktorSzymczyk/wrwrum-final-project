import "./App.scss";
import "./assets/styles/share/modalStyle.scss";
import "./assets/styles/share/mediumButton.scss";
import "./assets/styles/share/input-field.scss";
import "./assets/styles/share/text-link.scss"
import "./assets/styles/share/dropdown.scss"
import "./assets/styles/navBar/navBar.scss";
import "./assets/styles/signup_login/signupLogin.scss"
import "./assets/styles/navBar/navBar.scss"
import "./assets/styles/f1Datas/data-style.scss"
import "./assets/styles/f1Datas/datas-card.scss"
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
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
import ChatScreen from './components/Chat/ChatScreen';
import SingleTrackDetails from './components/Tracks/SingleTrackDetails';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import SuccessScreen_signup from "./pages/SuccessScreen_signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
	return (
		<div className='App bg-main-bg w-full '>
			<div className='main-website w-full'>

        	<ToastContainer/>
				<AuthProvider>
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
									index=''
									id=''
									value=''
								/>
							}
						/>
						<Route
							path='/tracks/:id'
							element={
								<SingleTrack
									id=''
									name=''
									img=''
									country=''
									distance=''
									laps=''
									firstGrandPrix=''
									lapRecordDriver=''
									lapRecordSeason=''
									circuitLength=''
									year={0}
									lapRecordTime=''
								/>
							}
						/>
						<Route
							path='/drivers'
							element={<Drivers />}
						/>
						<Route
							path='/tracks/'
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
							path='drivers/:year/:id'
							element={<DriversInformation />}
						/>

					<Route
						path='constructors/:year/:id'
						element={<SingleConstructorDetails />}
					/>

					<Route
						path='tracks/:year/:id'
						element={<SingleTrackDetails />}
					/>

					<Route
						path='*'
						element={<NotFound />}
					/>

					<Route
						path='/chat'
						element={<ChatScreen />}
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
						<Route path='signup' element={<Signup />} />
						<Route path='signup-success' element={<SuccessScreen_signup />}/>

						<Route path='login' element={<Login />}/>
						

					</Routes>
				</AuthProvider>
			</div>
		</div>
	);
}

export default App;
