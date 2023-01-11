import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
	index: any;
	value: any;
	id: any;
}) {
	let navigate = useNavigate();

	const handleClick = () => {
		let path: string = `/constructors/${props.value}/${props.id}`;
		navigate(path);
	};

	return (
		<div>
			<div className='p-10'>
				{/* <h1 className='text-white'>{props.index}</h1> */}
				<div
					className='modalSmall'
					onClick={handleClick}
				>
					<div className='px-6 py-4 bg-[#161616]'>
						<h2 className='font-bold mb-2 text-white'>{props.name}</h2>
						<div className='flex justify-center'>
							<Image
								src={props.img}
								alt=''
								className='w-[50%]'
							/>
						</div>
						<h2 className='font-bold py-2 text-white'>{props.chief}</h2>
						<h2 className='font-bold py-2 text-white'>Drivers</h2>
						<p className='py-2 text-secondary'>{props.d1Name}</p>
						<p className='py-2 text-secondary'>{props.d2Name}</p>
						<Link
							to={`/constructors/${props.value}/${props.id}`}
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
