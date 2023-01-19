import React, { useState } from 'react';
import NavBarDekstop from './NavBarDekstop';
import NavbarMobile from './NavbarMobile';



export default function Navbar() {
	

	return (
		<>
			<div className="nav-bar">
				<div className="nav-bar-desktop">
					<NavBarDekstop />
				</div>
				<div className='nav-bar-mobile'>
					<NavbarMobile />
				</div>
			</div>
			
		</>
	);
}
