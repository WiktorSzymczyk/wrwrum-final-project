import React, { useState, useEffect } from 'react';
import SingleConstructor from './SingleConstructor';
import data1 from '../../Datas/2021/teams.json';
import data2 from '../../Datas/2022/teams.json';
import data3 from '../../Datas/2023/teams.json';

export default function ConstructorPage() {
	const [data, setData] = useState(d2023);
	const [value, setValue] = useState('2023');
	const data2021 = data1;
	const data2022 = data2;
	const data2023 = data3;

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
					<h1>Show Current Standings</h1>
				</div>
			</div>
			<div className='p-10 grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
				{data3.teams.map((res) => (
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
						/>
					</div>
				))}
			</div>
		</form>
	);
}
