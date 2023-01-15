import React from 'react';
import { useParams, Link } from 'react-router-dom';
import t2022 from '../../Datas/2022/teams.json';
import Image from '../../library/Image';

export default function SingleConstructorDetails() {
	const params = useParams<{ name: string; id: any }>();

	// const index = d2023.driver.find(params.id);
	// const index = d2023.driver.findIndex(params.id);
	// console.log(params.id);
	// console.log(ds2022.standings[params.id]);
	// console.log(ds2022.standings[params.id - 1]);
	return (
		// <div className='flex flex-col text-center justify-center text-white bg-[#222222]'>
		// 	{/* <h3>{d2023.driver.findIndex(params.name)}</h3> */}
		// 	{/* <h1 className='text-white'>{index}</h1> */}
		// 	<img
		// 		src={ds2022.standings[params.id - 1].img}
		// 		className='h-[30vh] w-auto'
		// 	/>
		// 	<div className='flex-col justify-center'>
		// 		<div className='font-semibold text-2xl'>{params.name}</div>
		// 		<h1 className=''>{ds2022.standings[params.id - 1].country}</h1>
		// 		<img
		// 			src={ds2022.standings[params.id - 1].countryImg}
		// 			className='w-[3vw]'
		// 		/>
		// 		{ds2022.standings[params.id - 1].car}
		// 	</div>
		// </div>

		<div className='flex w-full justify-center'>
			<div className='p-10'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<div className='px-6 py-4 bg-[#161616]'>
						<div className='flex justify-center mb-2'>
							<Image
								src={t2022.teams[params.id - 1].img}
								alt={t2022.teams[params.id - 1].Name}
								className='w-[40%]'
							/>
						</div>
						<div className='font-semibold text-3xl mb-2 text-white'>
							{t2022.teams[params.id - 1].Name}
						</div>
						<div className='font-semibold text-xl mb-2 text-white'>
							{t2022.teams[params.id - 1].TeamChief}
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Base:</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].Base}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Power Unit:</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].PowerUnit}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								World Championships:
							</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].WorldChampionships}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Chasis:</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].Chasis}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								First Team Entry:
							</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].FirstTeamEntry}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Fastest Laps:</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].FastestLaps}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								Pole Positions:
							</h1>
							<p className='text-white font-medium'>
								{t2022.teams[params.id - 1].PolePositions}
							</p>
						</div>
						<div className='flex justify-center flex-col space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Drivers</h1>
							<p className='text-white font-medium'>
								<Link to='/'>
									{t2022.teams[params.id - 1].Drivers[0].Name +
										' ' +
										t2022.teams[params.id - 1].Drivers[0].Surname}
								</Link>
							</p>
							<p className='text-white font-medium'>
								<Link to='/'>
									{t2022.teams[params.id - 1].Drivers[1].Name +
										' ' +
										t2022.teams[params.id - 1].Drivers[1].Surname}
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
