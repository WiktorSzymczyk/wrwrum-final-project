import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/media/img/icons8-menu-90.png';
import NavbarLinksMobile from './NavbarLinksMobile';

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	return (
		<>
			<div className='p-0 sm:p-0 sm:hidden md:block'>
				<div className='hidden md:grid md:place-items-center h-[96vh] h-screen sticky top-0 bg-[#232323] pb-[20vh] pt-[5vh]'>
					<div className='sm:w-[10vw] md:w-[15vw]'>
						<div className='p-5'>
							<svg
								id='logo_v01-09'
								xmlns='http://www.w3.org/2000/svg'
								width='100%'
								height='160'
								viewBox='0 0 230 160'
							>
								<path
									id='Path_11'
									data-name='Path 11'
									d='M128.7,140.757h-19.35l-8.637-23.075-3.147-9.391-3.013,9.62-8.5,22.846H67.5L62.614,65.92H77.143L79.219,113.9l.536,13.112,3.95-11.68,9.642-26.625h10.378L113.9,116.937l3.281,9.963.268-11.68,2.21-49.3h13.994L128.7,140.757Z'
									transform='translate(-21.191 -25.591)'
									fill='#f2f2f2'
								/>
								<g
									id='Group_16'
									data-name='Group 16'
									transform='translate(0 0)'
								>
									<rect
										id='Rectangle_35'
										data-name='Rectangle 35'
										width='5.319'
										height='4.164'
										transform='translate(81.763 143.815)'
										fill='#f2f2f2'
									/>
									<path
										id='Path_16'
										data-name='Path 16'
										d='M81.613,153.231v-4.169h-52a6.3,6.3,0,0,1-6.481-6.113V27.565a6.3,6.3,0,0,1,6.481-6.113H211.93a6.3,6.3,0,0,1,6.481,6.113V78.509H194.076a1.188,1.188,0,0,1-1.212-1.079,17.622,17.622,0,0,0-.913-5.248c-.692-1.858-1.641-4.52-2.927-6.078a17.61,17.61,0,0,0-4.194-3.668,25,25,0,0,0-16.454-3.677,24.632,24.632,0,0,0-7.752,2.131A12.274,12.274,0,0,0,155.5,64.7c0-1.205-.548-7.278-.548-7.278H141.517v85.523a6.3,6.3,0,0,1-6.481,6.113H98.554v4.169H92.907v3.49h50.25a5.507,5.507,0,0,0,5.655-5.334V87.435a31.635,31.635,0,0,1,2.413-9.876c2.042-3.7,4.978-8.241,9.609-10.478,9.478-4.577,16.147-2.012,17.965-1.117,6.892,3.393,9.212,12.541,9.1,19.345a.277.277,0,0,0,.089.205.339.339,0,0,0,.234.092h32.359a5.507,5.507,0,0,0,5.655-5.333V18.828a5.507,5.507,0,0,0-5.655-5.334H21.745a6.785,6.785,0,0,0-6.967,6.572V150.15a6.785,6.785,0,0,0,6.967,6.571H87.26v-3.49Z'
										transform='translate(-5.757 -5.257)'
										fill='#f2f2f2'
									/>
									<rect
										id='Rectangle_36'
										data-name='Rectangle 36'
										width='5.319'
										height='2.981'
										transform='translate(81.763 153.174)'
										fill='#f2f2f2'
									/>
									<path
										id='Path_17'
										data-name='Path 17'
										d='M223.39,0H6.61A6.444,6.444,0,0,0,0,6.264V153.736A6.444,6.444,0,0,0,6.61,160H81.654v-3.827H76.035v-3.007H16.463a8.529,8.529,0,0,1-8.739-8.282V14.818a8.529,8.529,0,0,1,8.739-8.282H214.319a7.255,7.255,0,0,1,7.433,7.045V75.017a7.255,7.255,0,0,1-7.433,7.044h-32.2a2.175,2.175,0,0,1-1.52-.6,1.926,1.926,0,0,1-.606-1.432c.108-6.814-2.352-14.96-8.088-17.8-5.075-2.51-11.7-1.066-16.218,1.123-4.153,2.016-6.875,6.266-8.783,9.742a31.288,31.288,0,0,0-2.2,9.086v63.944a7.255,7.255,0,0,1-7.433,7.045H92.892v3.007H87.273V160h57.691a6.444,6.444,0,0,0,6.61-6.264V116.091h.085l.374-37.167c0-3.12,1.951-5.633,4.337-7.523,3.364-2.664,9.828-3.75,13.616-1.316a8.7,8.7,0,0,1,3.3,4.362,17.135,17.135,0,0,1,1.094,5.812v6.261a1.208,1.208,0,0,0,1.239,1.174h47.77A6.444,6.444,0,0,0,230,81.429V6.264A6.444,6.444,0,0,0,223.39,0Z'
										transform='translate(0 0)'
										fill='#f2f2f2'
									/>
									<path
										id='Path_18'
										data-name='Path 18'
										d='M128.541,248.316v-.505h-5.319v.505H117.9v1.2h5.319v-1.183h5.319v1.183h5.319v-1.2Z'
										transform='translate(-41.548 -96.347)'
										fill='#f2f2f2'
									/>
								</g>
							</svg>
						</div>
					</div>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/'
					>
						HOME
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/vote'
					>
						VOTE
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/tracks'
					>
						SEASONS
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/drivers'
					>
						DRIVERS
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/constructors'
					>
						CONSTRUCTORS
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/standings'
					>
						STANDINGS
					</Link>
					<Link
						className='py-5 text-white font-semibold text-2xl sm:text-sm'
						to='/chat'
					>
						CHAT ROOM
					</Link>
				</div>
			</div>

			{/* <div className='flex flex-col md:hidden z-10 h-screen sticky sm:top-0'>
				<img
					src={menu}
					alt=''
					className='w-[10vw] pt-5'
					onClick={() => setIsNavOpen(!isNavOpen)}
				/>
				{isNavOpen ? <NavbarLinksMobile /> : <div></div>}
			</div> */}
		</>
	);
}
