import React, { useState, useEffect } from 'react';
import d2021 from '../../Datas/2021/circuits.json';
import d2022 from '../../Datas/2022/circuits.json';
import d2023 from '../../Datas/2023/circuits.json';
import SingleTrack from './SingleTrack';

export default function Tracks() {
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
	<div className="datas-container"> 
		<div className="datas-top">
			<h1 >Season of </h1>
			
				<div onSubmit={handleSubmit}>
						<select
							value={value}
							className='dropdown-small'
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
				</div>

					

					<div className='datas-body'>
						
							{data.circuit.map((res: any) => (
								<div key={res.id}>
									<SingleTrack
										name={res.name}
										img={res.img}
										country={res.country}
										distance={res.raceDistance}
										laps={res.numberOfLaps}
										firstGrandPrix={res.firstGrandPrix}
										lapRecordDriver={res.lapRecordDriver}
										lapRecordSeason={res.lapRecordSeason}
										lapRecordTime={res.lapRecordTime}
										circuitLength={res.circuitLength}
										id={res.id}
										year={res.year}
									/>
								</div>
							))}
					
					</div>
			
			
	</div>

	);
}
