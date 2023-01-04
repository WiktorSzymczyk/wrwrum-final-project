import React from 'react';
import d2023 from '../../Datas/2023/drivers.json';
import { Link, useParams } from 'react-router-dom';

export default function SingleDriverDetails() {
	const params = useParams<{ id: any }>();

	return (
		<div className='flex flex-col text-center justify-center text-white w-full px-[20vw]'>
			<>
				<div className='bg-[#222222]'>
					{params.id}
					<h2>{d2023.driver[params.id].name}</h2>
					<h3>{d2023.driver[params.id].country}</h3>
					<p>{d2023.driver[params.id].dob}</p>
					<Link to='/drivers'>Back</Link>
				</div>
			</>
		</div>
	);
}
