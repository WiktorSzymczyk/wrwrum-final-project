import { useState } from 'react';
// import d2022 from '../../Datas/2023/driverStandings.json';
import Standings from '../Standings/Standings';
import "../../assets/styles/f1Datas/standings.scss"
import { NavLink } from 'react-router-dom';

export default function StandingsPage() {
	const [team, setTeams] = useState(false);

	return (
		<div className='standing-main'>
			

			<div className='standing-option-body'>
				<h1 >
				STANDINGS
				</h1>
				<div>
					<NavLink
					onClick={() => setTeams(!team)}
					className='standing-option' to={''}					>
						Constructors
					</NavLink>
				
					<NavLink
						onClick={() => setTeams(!team)}
						className='standing-option' to={''}	
					>
						Drivers
					</NavLink>
				</div>
				
			</div>

			<div>
				<Standings team={team} />
			</div>
		</div>
	);
}
