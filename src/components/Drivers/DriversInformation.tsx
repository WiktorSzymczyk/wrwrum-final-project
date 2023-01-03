import React from 'react';
import { useParams } from 'react-router-dom';
import d2022 from '../../Datas/2022/drivers.json';
import ds2022 from '../../Datas/2022/driverStandings.json';

export default function DriversInformation() {
	const params = useParams<{ name: string; id: any }>();

	// const index = d2023.driver.find(params.id);
	// const index = d2023.driver.findIndex(params.id);
	console.log(params.id);
	// console.log(ds2022.standings[params.id]);
	console.log(ds2022.standings[params.id - 1]);
	return (
		<>
			<div className='text-white'>{params.name}</div>
			{/* <h3>{d2023.driver.findIndex(params.name)}</h3> */}
			{/* <h1 className='text-white'>{index}</h1> */}
			<h1 className='text-white'>{ds2022.standings[params.id - 1].country}</h1>
			<img
				src={ds2022.standings[params.id - 1].img}
				className='h-[30vh] w-auto'
			/>
		</>
	);
}
