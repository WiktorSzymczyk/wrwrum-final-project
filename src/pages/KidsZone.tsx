import {Outlet} from "react-router-dom"
import {ReactComponent as Logo} from '../assets/img/logo.svg'

const KidsZone = () => {
  return (
    <div className='m-11 self-center place-self-center'>
        <div className='modalSmall'>
        <Logo />
        </div>
       <Outlet/>
    </div>
  )
}

export default KidsZone
