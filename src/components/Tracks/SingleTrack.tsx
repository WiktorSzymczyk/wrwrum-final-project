import { Link, useNavigate } from 'react-router-dom';
import Image from '../../library/Image';

export default function SingleTrack(props: {
	name: any;
	img: any;
	country: String;
	distance: String;
	firstGrandPrix: String;
	circuitLength: String;
	laps: String;
	lapRecordTime: String;
	lapRecordSeason: String;
	lapRecordDriver: String;
	id: any;
	year: any;
}) {
	let navigate = useNavigate();

	const handleClick = () => {
		let path: string = `/tracks/${props.year}/${props.id}`;
		navigate(path);
	};

	return (
		<div>
			<div className='p-10'>
				<div
					className='modalSmall'
					onClick={handleClick}
				>
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className='w-full bg-white'
						src={props.img}
						alt=''
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold mb-2 text-white'>{props.name}</h2>

						<h2 className='text-secondary font-bold'>{props.country}</h2>

						<p className='text-gray-300 text-base pb-2'>
							Laps: <span className='font-medium'>{props.laps}</span>
						</p>
						<Link
							to={`/tracks/${props.year}/${props.id}`}
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
