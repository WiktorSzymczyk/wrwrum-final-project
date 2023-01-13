import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import d2021 from '../../Datas/2021/teams.json';
import d2022 from '../../Datas/2022/teams.json';
import d2023 from '../../Datas/2023/teams.json';
import ts2022 from '../../Datas/2022/teamStandings.json';
import Image from '../../library/Image';
import BackButton from '../share/BackButton';

export default function SingleConstructorDetails() {
	const params = useParams<{ year: any; id: any }>();

	const [value] = useState('2023');
	const [data] = useState(d2022);
	const [constructor, setConstructor]: any = useState({});

	useEffect(() => {
		if (params.year === '2023') {
			setConstructor(d2023.teams[params.id]);
		} else if (params.year === '2022') {
			setConstructor(d2022.teams[params.id]);
		} else if (params.year === '2021') {
			setConstructor(d2021.teams[params.id]);
		}
	}, [data, value, constructor]);

	console.log(constructor);

	// const message =
	// 	typeof constructor == 'object' && Object.keys(constructor).length === 0
	// 		? 'object is empty'
	// 		: 'object is not empty';
	// console.log(message);

	return (
		<div className='flex w-full justify-center'>
			<div className='back-button-component absolute pl-2'>
				<BackButton />
			</div>
			<div className='p-10'>
				<div className='modalMedium'>
					<div className='px-6 py-4 bg-[#161616]'>
						<div className='flex justify-center mb-2'>
							<Image
								src={constructor.img}
								alt={constructor.Name}
								className='w-[40%]'
							/>
						</div>
						<div className='font-semibold text-3xl mb-2 text-white'>
							{constructor.Name}
						</div>
						<div className='font-semibold text-xl mb-2 text-white'>
							{constructor.TeamChief}
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Base:</h1>
							<p className='text-white font-medium'>{constructor.Base}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Power Unit:</h1>
							<p className='text-white font-medium'>{constructor.PowerUnit}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								World Championships:
							</h1>
							<p className='text-white font-medium'>
								{constructor.WorldChampionships}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Chasis:</h1>
							<p className='text-white font-medium'>{constructor.Chasis}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								First Team Entry:
							</h1>
							<p className='text-white font-medium'>
								{constructor.FirstTeamEntry}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Fastest Laps:</h1>
							<p className='text-white font-medium'>
								{constructor.FastestLaps}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								Pole Positions:
							</h1>
							<p className='text-white font-medium'>
								{constructor.PolePositions}
							</p>
						</div>
						<div className='flex justify-center flex-col space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Drivers</h1>
							<p className='text-white font-medium'>
								{/* <Link to='/'>
									{constructor.Drivers[0].Name +
										' ' +
										constructor.Drivers[0].Surname}
								</Link> */}
							</p>
							<p className='text-white font-medium'>
								{/* <Link to='/'>
									{constructor.Drivers[1].Name +
										' ' +
										constructor.Drivers[1].Surname}
								</Link> */}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
