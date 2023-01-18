import React, { useState } from 'react';
import NavBarDekstop from './NavBarDekstop';
import { useAuthContext, DataType } from "../../context/AuthContext"



export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	const { setToken, isAuthenticated} = useAuthContext() as DataType

	// const logout = () => {
	// 	localStorage.removeItem('token'),
	// 	setToken(),
	// 	setIsAuthenticated(false)

	// }


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
