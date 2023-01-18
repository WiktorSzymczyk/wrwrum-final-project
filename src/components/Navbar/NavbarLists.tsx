import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext, DataType} from '../../context/AuthContext';


const NavbarLists = () => {
    const { setToken, isAuthenticated} = useAuthContext() as DataType

    	// const logout = () => {
	// 	localStorage.removeItem('token'),
	// 	setToken(),
	// 	setIsAuthenticated(false)

	// }
  return (
    <div className="nav-bar-body">
        <div className="nav-bar-main">
            <NavLink
                    className='nav-list'
                    to='/'
                >
                    HOME
                </NavLink>
                
                <NavLink
                    className='nav-list'
                    to='/tracks/'
                >
                    SEASONS
                </NavLink>
                <NavLink
                    className='nav-list'
                    to='/drivers'
                >
                    DRIVERS
                </NavLink>
                <NavLink
                    className='nav-list'
                    to='/constructors'
                >
                    CONSTRUCTORS
                </NavLink>
                <NavLink
                    className='nav-list'
                    to='/standings'
                >
                    STANDINGS
                </NavLink>
                <NavLink
                    className='nav-list'
                    to='/chat'
                >
                    CHAT ROOM
                </NavLink>
                <NavLink
                    className='nav-list'
                    to='/kidszone'
                >
                    KIDS ZONE
                </NavLink>
            </div>
                
                {/* <Link
                    className='medium-button  text-2xl w-full'
                    to='/login'>
                    LOG IN
                </Link> */}
            <div className="login-button-section">
                    {isAuthenticated ? (
                        
                            <Link
                                className='medium-button login-button text-2xl'
                                to='/login'>
                                LOG IN
                            </Link>
                    
                ): (
                   
                    <button className='medium-button login-button  text-2xl '>
                        LOG OUT
                    </button>
                                  
                )}
            </div>
    </div>
  )
}

export default NavbarLists
