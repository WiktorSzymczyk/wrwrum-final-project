import { Link } from 'react-router-dom';

export default function NavbarLinksMobile() {
	return (
		<div className='bg-main-bg h-screen z-9 absolute pt-10'>
			<div className='flex py-5 items-center'>
				<div className='flex-grow border-t border-[#00ff5e]'></div>
				<span className='flex-shrink mx-4 text-white text-2xl font-bold'>
					Wrwrum...
				</span>
				<div className='flex-grow border-t border-[#00ff5e]'></div>
			</div>
			<div className='w-screen flex flex-col text-white'>
				<Link
					to='/'
					className='font-semibold pt-5'
				>
					HOME
				</Link>
				<Link
					to='/vote'
					className='font-semibold pt-5'
				>
					VOTE
				</Link>
				<Link
					to='/tracks'
					className='font-semibold pt-5'
				>
					SEASONS
				</Link>
				<Link
					to='/drivers'
					className='font-semibold pt-5'
				>
					DRIVERS
				</Link>
				<Link
					to='/constructors'
					className='font-semibold pt-5'
				>
					CONSTRUCTORS
				</Link>
				<Link
					to='/standings'
					className='font-semibold pt-5'
				>
					STANDINGS
				</Link>
				<Link
					to='/chat'
					className='font-semibold pt-5'
				>
					CHAT ROOM
				</Link>
			</div>
		</div>
	);
}
