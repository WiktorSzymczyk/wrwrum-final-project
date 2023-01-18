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
		<div className='modalSmall datas-card'>
			
				<div
					
					onClick={handleClick}
				>
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className='card-img'
						src={props.img}
						alt=''
					/>
					<div className='py-4'>
						<h4 className='text-secondary mb-2'>{props.country}</h4>
						<h4 className='font-bold mb-6'>{props.name}</h4>

						

						<p className='text-gray-300 text-base pb-2'>
							Laps: <span className='font-medium'>{props.laps}</span>
						</p>
						
					</div>
				</div>
			
		</div>
	);
}
