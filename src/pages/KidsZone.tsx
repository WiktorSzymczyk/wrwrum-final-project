import {Outlet} from "react-router-dom"
import "../assets/styles/kidsZone/kidsZone.scss"

const KidsZone = () => {
  return (
    <div className="kidsZone-container">
     <Outlet/>
    </div>
  )
}

export default KidsZone
