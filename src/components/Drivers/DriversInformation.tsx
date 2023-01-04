import React from 'react';
import { useParams } from 'react-router-dom';
import d2022 from '../../Datas/2022/drivers.json';
import ds2022 from '../../Datas/2022/driverStandings.json';
import Image from '../../library/Image';

export default function DriversInformation() {
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
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className=''
						src={ds2022.standings[params.id - 1].img}
						alt=''
					/>
					<div className='px-6 py-4 bg-[#161616]'>
						<div className='font-bold text-2xl mb-2 text-white'>
							{ds2022.standings[params.id - 1].no}
						</div>
						<div className='flex justify-center mb-2'>
							<Image
								src={ds2022.standings[params.id - 1].countryImg}
								alt={ds2022.standings[params.id - 1].name}
								className='w-[15%]'
							/>
						</div>
						<div className='font-semibold text-3xl mb-2 text-white'>
							{ds2022.standings[params.id - 1].name}
						</div>
						<div className='font-thin text-lg mb-2 text-white'>
							{ds2022.standings[params.id - 1].team}
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Born: </h1>
							<p className='text-md text-white font-medium'>
								{ds2022.standings[params.id - 1].pob}
							</p>
							<p className='text-white font-medium'>
								{ds2022.standings[params.id - 1].dob}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Total Points: </h1>
							<p className='text-white font-medium'>
								{ds2022.standings[params.id - 1].pointsTotal}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								World Championships:
							</h1>
							<p className='text-white font-medium'>
								{ds2022.standings[params.id - 1].worldChamp}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>Podiums: </h1>
							<p className='text-white font-medium'>
								{ds2022.standings[params.id - 1].podiums}
							</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h1 className='text-white font-bold text-base'>
								Grands Prix entered:
							</h1>
							<p className='text-white font-medium'>
								{ds2022.standings[params.id - 1].gp}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
