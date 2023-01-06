import React from 'react';
import Image from '../../library/Image';
import { Link } from 'react-router-dom';

export default function SingleDriver(props: {
	img: any;
	Name: String;
	no: String;
	team: String;
	country: String;
	pob: String;
	dob: String;
	points: String;
	countryImg: any;
	id: number;
	idInfo: any;
}) {
	return (
		<div>
			<div className='p-10'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className=''
						src={props.img}
						alt=''
					/>
					<div className='px-6 py-4 bg-[#161616]'>
						<h1 className='font-bold mb-2 text-white'>{props.no}</h1>
						<div className='flex justify-center'>
							<Image
								src={props.countryImg}
								alt=''
								className='w-[15%]'
							/>
						</div>
						<h2 className='font-bold py-2 text-white'>{props.Name}</h2>
						<p className='text-white py-2 text-secondary'>{props.team}</p>
						<Link
							to={`/drivers/${props.Name}/${props.idInfo}`}
							className='text-white font-semibold'
						>
							Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
