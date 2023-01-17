import Image from '../../library/Image';
import { Link, useNavigate } from 'react-router-dom';

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
	idInfo2: any;
	index: any;
	value: any;
}) {
	let navigate = useNavigate();

	const handleClick = () => {
		let path: string = `/drivers/${props.value}/${props.id}`;
		navigate(path);
	};

	const handleClickToConstructor = () => {
		let path: string = `/constructors/${props.team}/${props.idInfo2}`;
		navigate(path);
	};

	return (
		<div>
			<div className='p-10'>
				<div
					className='modalSmall w-screen'
					onClick={handleClick}
				>
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
						<p
							className='text-white py-2 text-secondary'
							onClick={handleClickToConstructor}
						>
							{props.team}
						</p>
						<Link
							to={`/drivers/${props.value}/${props.id}`}
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
