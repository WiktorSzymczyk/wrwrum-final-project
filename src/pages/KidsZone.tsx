import {Outlet} from "react-router-dom"

const KidsZone = () => {
  return (
    <div className="kidsZone-container flex justify-center w-full lg:my-16 sm:m-4">
     <Outlet/>
    </div>
  )
}

export default KidsZone
