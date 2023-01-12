import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../library/Image';
import d2021 from '../../Datas/2021/circuits.json';
import d2022 from '../../Datas/2022/circuits.json';
import d2023 from '../../Datas/2023/circuits.json';
import BackButton from '../share/BackButton';

export default function SingleTrackDetails() {
	const params = useParams<{ year: any; id: any }>();

	const [value, setValue] = useState('2023');
	const [data, setData] = useState(d2023);
	const [track, setTrack]: any = useState({});

	useEffect(() => {
		if (params.year == 2023) {
			setTrack(d2023.circuit[params.id - 1]);
		} else if (params.year == 2022) {
			setTrack(d2022.circuit[params.id - 1]);
		} else if (params.year == 2021) {
			setTrack(d2021.circuit[params.id - 1]);
		}
	}, [data, value, track]);

	return (
		<div className='flex w-full justify-center'>
			<div className=''>
				<div className='back-button-component absolute pl-2'>
					<BackButton />
				</div>
				<div className='p-10'>
					<div className='modalMedium'>
						<Image
							placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
							className='w-full bg-white'
							src={track.img}
							alt=''
						/>
						<div className='px-6 py-4 bg-[#161616]'>
							<h2 className='font-bold mb-2 text-white'>{track.name}</h2>
							<h2 className='font-semibold mb-2 text-white'>{track.country}</h2>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<h3 className='text-white font-bold text-base'>Laps: </h3>
								<p className='text-white font-medium'>{track.numberOfLaps}</p>
							</div>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<h3 className='text-white font-bold text-base'>Laps: </h3>
								<p className='text-white font-medium'>{track.circuitLength}</p>
							</div>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<h3 className='text-white font-bold text-base'>
									First Grand Prix:
								</h3>
								<p className='text-white font-medium'>{track.firstGrandPrix}</p>
							</div>
							<h3 className='text-white font-bold text-base pt-4'>
								Lap Record:{' '}
							</h3>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<p className='text-md text-white font-medium'>
									{track.lapRecordDriver}{' '}
								</p>
							</div>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<p className='text-md text-white font-medium'>
									{track.lapRecordSeason}{' '}
								</p>
							</div>
							<div className='flex justify-center space-x-2 bg-[#2a2a2a] p-2 rounded-md mt-4'>
								<p className='text-md text-white font-medium'>
									{track.lapRecordTime}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
