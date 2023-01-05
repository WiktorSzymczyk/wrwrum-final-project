import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../library/Image';

export default function SingleConstructor(props: {
	name: String;
	chief: String;
	powerUnit: String;
	img: any;
	d1Name: String;
	d2Name: String;
	chasis: String;
	first: String;
	world: String;
	idInfo: any;
}) {
	return (
		<div>
			<div className='p-10'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<div className='px-6 py-4 bg-[#161616]'>
						<div className='font-bold text-3xl mb-2 text-white'>
							{props.name}
						</div>
						<div className='flex justify-center'>
							<Image
								src={props.img}
								alt=''
								className='w-[50%]'
							/>
						</div>
						<p className=' font-bold text-2xl py-2 text-white'>{props.chief}</p>
						<p className=' font-bold text-xl py-2 text-white'>Drivers</p>
						<p className='text-white text-base py-2 text-secondary'>
							{props.d1Name}
						</p>
						<p className='text-white text-base py-2 text-secondary'>
							{props.d2Name}
						</p>
						<Link
							to={`/constructors/${props.name}/${props.idInfo}`}
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
