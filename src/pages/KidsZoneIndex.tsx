import '../assets/styles/kidsZone/kidsZoneIndex.scss';
import { useNavigate } from 'react-router-dom';

const KidsZoneIndex = () => {
	let navigate = useNavigate();

	const handleClick = () => {
		let path: string = '/kidszone/memorygame';
		navigate(path);
	};

	return (
		<div>
			<div className='kids-zone-container'>
				<h1 className='kids-zone-title'>Kids Zone</h1>
				<div
					className='modalSmall kids-zone-card'
					onClick={handleClick}
				>
					<div className='img-frame'>
						<img
							src='/img/kids_zone/memory_game.jpg'
							alt=''
						></img>
					</div>
					<h3>Memory Game</h3>
				</div>
			</div>
		</div>
	);
};

export default KidsZoneIndex;
