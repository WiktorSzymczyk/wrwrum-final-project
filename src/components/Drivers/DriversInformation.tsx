import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import d2021 from '../../Datas/2021/drivers.json';
import d2022 from '../../Datas/2022/drivers.json';
import d2023 from '../../Datas/2023/drivers.json';
import ds2022 from '../../Datas/2022/driverStandings.json';
import Image from '../../library/Image';
import BackButton from '../share/BackButton';

export default function DriversInformation() {
	const params = useParams<{ year: any; id: any }>();

	const [value, setValue] = useState('2023');
	const [data, setData] = useState(d2023);
	const [driver, setDriver]: any = useState({});

	useEffect(() => {
		if (params.year == 2023) {
			setDriver(d2023.driver[params.id - 1]);
		} else if (params.year == 2022) {
			setDriver(d2022.driver[params.id - 1]);
		} else if (params.year == 2021) {
			setDriver(d2021.driver[params.id - 1]);
		}
	}, [data, value, driver]);

	// const message =
	// 	typeof driver == 'object' && Object.keys(driver).length === 0
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
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className=''
						src={driver.img}
						alt=''
					/>
					<div className='px-6 py-4 bg-[#161616]'>
						<h1>{driver.name}</h1>
						<h1 className='font-bold mb-2 text-white'>{driver.no}</h1>
						<div className='flex justify-center mb-2'>
							<Image
								src={driver.countryImg}
								alt={driver.name}
								className='w-[15%]'
							/>
						</div>
						<h1 className='font-semibold mb-2 text-white'>{driver.name}</h1>
						<h2 className='font-thin mb-2 text-white'>{driver.team}</h2>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4 overflow-hidden'>
							<h3 className='text-white font-bold text-base '>Born: </h3>
							<p className='text-md text-white font-medium '>{driver.pob}</p>
							<p className='text-white font-medium'>{driver.dob}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h3 className='text-white font-bold text-base'>Total Points: </h3>
							<p className='text-white font-medium'>{driver.points}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h3 className='text-white font-bold text-base'>
								World Championships:
							</h3>
							<p className='text-white font-medium'>{driver.worldChamp}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h3 className='text-white font-bold text-base'>Podiums: </h3>
							<p className='text-white font-medium'>{driver.podiums}</p>
						</div>
						<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
							<h3 className='text-white font-bold text-base'>
								Grands Prix entered:
							</h3>
							<p className='text-white font-medium'>{driver.gp}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
