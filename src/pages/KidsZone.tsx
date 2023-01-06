import {Outlet} from "react-router-dom"
import "../assets/styles/kidsZone/kidsZone.scss"

const KidsZone = () => {
  return (
    <div className="kids-zone-page">
     <Outlet/>
    </div>
  )
}

export default KidsZone
