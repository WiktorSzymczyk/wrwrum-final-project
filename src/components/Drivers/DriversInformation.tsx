import React from 'react';
import { useParams } from 'react-router-dom';
import d2023 from '../../Datas/2023/drivers.json';

export default function DriversInformation() {
	const params = useParams<{ name: string; id: any }>();

	const index = d2023.driver.find(params.id);
	// const index = d2023.driver.findIndex(params.id);
	console.log(params.id);
	return (
		<>
			<div className='text-white'>{params.name}</div>
			{/* <h3>{d2023.driver.findIndex(params.name)}</h3> */}
			{/* <h1 className='text-white'>{index}</h1> */}
			<h1 className='text-white'>{d2023.driver[params.id].country}</h1>
		</>
	);
}
