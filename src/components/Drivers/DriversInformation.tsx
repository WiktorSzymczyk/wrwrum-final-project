import React from 'react';
import { useParams } from 'react-router-dom';
import d2023 from '../../Datas/2023/drivers.json';

export default function DriversInformation() {
	const params = useParams<{ name: any }>();

	return (
		<>
			<div className='text-white'>{params.name}</div>
			{/* <h3>{d2023.driver.findIndex(params.name)}</h3> */}
		</>
	);
}
