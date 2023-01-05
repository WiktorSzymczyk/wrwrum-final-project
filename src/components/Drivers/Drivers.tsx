import React, { useEffect, useState } from 'react';
import SingleDriver from './SingleDriver';
import d2021 from '../../Datas/2021/drivers.json';
import d2022 from '../../Datas/2022/drivers.json';
import d2023 from '../../Datas/2023/drivers.json';

export default function Drivers() {
	const [data, setData] = useState(d2023);
	const [value, setValue] = useState('2023');
	const data2021 = d2021;
	const data2022 = d2022;
	const data2023 = d2023;

	const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
		console.log(data);
		console.log(value);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};

	useEffect(() => {
		console.log(data);
		if (value === '2023') {
			setData(data2023);
		} else if (value === '2022') {
			setData(data2022);
		} else if (value === '2021') {
			setData(data2021);
		}
	}, [data, value]);

	return (
		<form onSubmit={handleSubmit}>
			<div className='pt-10 bg-[#151515]'>
				<select
					value={value}
					className='mb-5 mr-5'
					onChange={handleChanges}
				>
					<option
						className='2023'
						value='2023'
					>
						Current
					</option>
					<option
						className='2022'
						value='2022'
					>
						2022
					</option>
					<option
						className='2021'
						value='2021'
					>
						2021
					</option>
				</select>
			</div>
			<div className='sm:pt-10 md:pt-0 grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
				{data2023.driver.map((res) => (
					<div key={res.id}>
						<SingleDriver
							img={res.img}
							Name={res.name + ' ' + res.surname}
							no={res.no}
							team={res.team}
							country={res.country}
							pob={res.pob}
							dob={res.dob}
							points={res.points}
							countryImg={res.countryImg}
							id={res.id}
							idInfo={res.idInfo}
						/>
					</div>
				))}
			</div>
		</form>
	);
}
