import {Outlet} from "react-router-dom"

const KidsZone = () => {
  return (
    <div className="kidsZone-container flex justify-center w-full m-11">
     <Outlet/>
    </div>
  )
}

export default KidsZone
