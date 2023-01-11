import React, { useEffect, useState } from 'react';
import SingleDriver from './SingleDriver';
import d2021 from '../../Datas/2021/drivers.json';
import d2022 from '../../Datas/2022/drivers.json';
import d2023 from '../../Datas/2023/drivers.json';

export interface driverData {
	index: any;
}

export default function Drivers() {
	const [data, setData] = useState(d2023);
	const [value, setValue] = useState('2023');
	const [indexDriver, setIndexDriver] = useState<driverData | number>(Number);
	const data2021 = d2021;
	const data2022 = d2022;
	const data2023 = d2023;

	const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
		// 	console.log(data);
		// 	console.log(value);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};

	const handleId = (event: React.MouseEvent) => {
		const ev = event.target;
		console.log(ev);
	};

	// const testClick = (event: any, id: any) => {
	// 	console.log(event, id);
	// };

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

	const getDriverID = () => {
		console.log();
	};

	console.log(value);
	console.log(data);

	return (
		<form onSubmit={handleSubmit}>
			<div className='pt-10 pt-20 md:pt-10'>
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
			<div className='flex flex-wrap justify-center items-center'>
				{data.driver.slice(0, 20).map((res, index) => (
					<div
						key={res.id}
						onClick={() => setIndexDriver(index)}
					>
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
							idInfo2={res.idInfo2}
							index={index}
							value={value}
						/>
					</div>
				))}
			</div>
		</form>
	);
}
