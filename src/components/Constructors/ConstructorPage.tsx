// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import SingleConstructor from './SingleConstructor';
import d2021 from '../../Datas/2021/teams.json';
import d2022 from '../../Datas/2022/teams.json';
import d2023 from '../../Datas/2023/teams.json';

export default function ConstructorPage() {
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
	}, [data, data2021, data2022, data2023, value]);

	console.log(value);
	console.log(data);

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

				<div className='text-white'>
					<h1>Show Current Season</h1>
				</div>
			</div>
			<div className='flex flex-wrap justify-center items-center'>
				{data.teams.map((res, index) => (
					<div key={res.id}>
						<SingleConstructor
							name={res.Name}
							chief={res.TeamChief}
							powerUnit={res.PowerUnit}
							img={res.img}
							d1Name={res.Drivers[0].Name + ' ' + res.Drivers[0].Surname}
							d2Name={res.Drivers[1].Name + ' ' + res.Drivers[1].Surname}
							chasis={res.Chasis}
							first={res.FirstTeamEntry}
							world={res.WorldChampionships}
							idInfo={res.id + 1}
							value={value}
							index={index}
							id={res.id}
						/>
					</div>
				))}
			</div>
		</form>
	);
}
