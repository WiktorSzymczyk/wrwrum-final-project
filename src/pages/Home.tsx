import Image from '../library/Image';
import NewsContainer from './../components/News/NewsContainer';
import SingleDriver from '../components/Drivers/SingleDriver';
import d2023 from '../Datas/2023/drivers.json';
import { useEffect, useState } from 'react';
import "../assets/styles/home/home.scss"
import { NavLink } from 'react-router-dom';


export interface driverData {
	index: any;
}


export default function Home() {
	const [data, setData] = useState(d2023);
	const [value, setValue] = useState('2023');

	const data2023 = d2023;
	
	const [indexDriver, setIndexDriver] = useState<driverData | number>(Number);


	useEffect(() => {
		setData(data2023);
		}, [data2023]);

	return (
		<>
			<div className='home-container'>
				<Image
					src='https://www.dhl.com/content/dam/dhl/global/delivered/images/social-share-1200x630/g168-dl-formula-1-season-2022-racing-car.jpg'
					className='top-image'
					alt=''
				/>
				<div className='relative flex my-8 items-center'>
					<div className='flex-grow border-t border-[#00ff5e]'></div>
					<span className='flex-shrink mx-6 text-white text-2xl font-bold'>
						DRIVERS
					</span>
					<div className='flex-grow border-t border-[#00ff5e]'></div>
					
				</div>
				
					<div className="driver-section">
						{data.driver.slice(0, 3).map((res:any, index:any) => (
						<div
							key={res.id}
							onClick={() => setIndexDriver(index)}
						>
							<SingleDriver
								img={res.img}
								Name={res.name + ' ' + res.surname}
								no={res.no}
								team={res.team}
								country={res.country}
								pob={res.pob}
								dob={res.dob}
								points={res.points}
								countryImg={res.countryImg}
								id={res.id}
								idInfo={res.idInfo}
								idInfo2={res.idInfo2}
								index={index}
								value={value}
							/>
						</div>
						))}
					</div>

					<div className='more-drivers-section'>
						<NavLink className="medium-button" to="/drivers">
							MORE DRIVERS
						</NavLink>
					</div>
				

				<div className='relative flex my-8 items-center '>
					<div className='flex-grow border-t border-[#00ff5e]'></div>
					<span className='flex-shrink mx-6 text-white text-2xl font-bold'>
						NEWS
					</span>
					<div className='flex-grow border-t border-[#00ff5e]'></div>
				</div>

				<div className="home-news-section">
					<NewsContainer />
				</div>
			</div>
		</>
	);
}
