import Image from '../../library/Image';
import {  useNavigate } from 'react-router-dom';
import "../../assets/styles/f1Datas/drivers-card.scss"

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
			<div className='modalSmall datas-card'>
				<div
					onClick={handleClick}
				>

					<div className='driver-information-container'>
						<div className="driver-card-top">
							<div className="driver-name-section">
								<h3 className='driver-name'>{props.Name}</h3>
								<Image
										src={props.countryImg}
										alt=''
										className='driver-country'
									/>
							</div>
							<h1 className='font-bold'>{props.no}</h1>
							</div>	
							<hr className="driver-seperation-card"/>
							<p
							className='driver-team'
							onClick={handleClickToConstructor}>
							{props.team}
							</p>
						</div>

					
					
					<Image
						placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load'
						className='driver-image'
						src={props.img}
						alt=''
					/>
					
				</div>
			</div>
		</div>
	);
}
