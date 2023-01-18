import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext, DataType} from '../../context/AuthContext';


const NavbarLists = () => {
    const { token, setToken, isAuthenticated, setIsAuthenticated} = useAuthContext() as DataType

    	const logout = () => {
            localStorage.removeItem('token')
            setToken(null)
            setIsAuthenticated(false)
	    }

        // console.log(token)


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

              {/* -----> login and out */}
                {isAuthenticated ? (
                    <button className='nav-list' onClick={logout}>
                        LOG OUT
                    </button>
                                
                    ): (
                   
                    <Link
                        className='nav-list'
                        to='/login'>
                        LOG IN
                    </Link>
                                  
                     )}
           
            </div>
                
                {/* <Link
                    className='medium-button  text-2xl w-full'
                    to='/login'>
                    LOG IN
                </Link> */}
            
    </div>
  )
}

export default NavbarLists
