import React from 'react';
import { useParams } from 'react-router-dom';
import d2023 from '../../Datas/2023/drivers.json';

export default function DriversInformation() {
	const params = useParams<{ name: string }>();

	const index = d2023.driver.findIndex((driver) => driver.id);
	return (
		<>
			<div className='text-white'>{params.name}</div>
			{/* <h3>{d2023.driver.findIndex(params.name)}</h3> */}
			{/* <h1 className='text-white'>{index}</h1> */}
			<h1 className='text-white'>{d2023.driver[index - 1].country}</h1>
		</>
	);
}
