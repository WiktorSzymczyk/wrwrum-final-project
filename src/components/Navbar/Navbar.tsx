import React, { useState } from 'react';
import NavBarDekstop from './NavBarDekstop';


export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


	return (
		<>
			<div className="nav-bar">
				<div className="nav-bar-desktop">
					<NavBarDekstop />
				</div>
				<div className='nav-bar-mobile'>

				</div>
			</div>
		</>
	);
}
