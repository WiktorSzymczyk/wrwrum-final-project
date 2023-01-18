import { useState } from 'react';
// import d2022 from '../../Datas/2023/driverStandings.json';
import Standings from '../Standings/Standings';

export default function StandingsPage() {
	const [team, setTeams] = useState(false);

	return (
		<div className='w-full pt-20'>
			<h1 className='text-white text-2xl font-semibold text-center'>
				STANDINGS
			</h1>

			<div className='flex justify-center'>
				{team ? (
					<button
						onClick={() => setTeams(!team)}
						className='medium-button'
					>
						Constructors Standings
					</button>
				) : (
					<button
						onClick={() => setTeams(!team)}
						className='medium-button'
					>
						Drivers Standings
					</button>
				)}
			</div>

			<div className='w-full text-center text-white'>
				<Standings team={team} />
			</div>
		</div>
	);
}
