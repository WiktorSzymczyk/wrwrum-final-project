import { useState } from 'react';
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
						className='hover:cursor-pointer text-white font-semibold'
					>
						Constructors Standings
					</button>
				) : (
					<button
						onClick={() => setTeams(!team)}
						className='hover:cursor-pointer text-white font-semibold'
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
