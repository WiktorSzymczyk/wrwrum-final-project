import React, { useState } from 'react';
import Logo from './Logo';
import NavbarLists from './NavbarLists';


export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	




	return (
		<>
			<div className='Nav-bar-container'>
				
					<Logo/>
					<NavbarLists/>
			
				

				
			</div>
		</>
	);
}
