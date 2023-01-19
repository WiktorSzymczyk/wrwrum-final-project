import { useCallback, useState } from "react";
import NavbarLists from "./NavbarLists";
import { Outlet } from "react-router-dom";



export default function NavbarMobile() {

	const [isShown, setIsShown] = useToggle(); 

	const logo = "/img/logo.svg"
	return (
		<div className='nav-bar-mobile-main'>
			<div className="mobile-logo">
				<a href="/"><img src={logo}/></a>
			</div>
			<div className="burger-menu" onClick={setIsShown}>
				{isShown? <div className="drop-down-submenu"><NavbarLists/></div>: !(<NavbarLists/>)}
				<img src="/img/burger-menu.png" alt="menu" />
			</div>
			
		</div>
	);
}

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle]
}
