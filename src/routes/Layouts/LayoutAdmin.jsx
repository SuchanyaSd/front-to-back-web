import Sidebar from "../../components/admin/Sidebar"
import { Outlet } from "react-router"
import HeaderAdmin from "../../components/admin/headerAdmin"

function LayoutAdmin() {
   return (
      <div className="flex h-screen">
         <Sidebar />
         <div className="flex flex-col flex-1">
            <HeaderAdmin />
            <div className="border p-2 m-2 flex-1  bg-blue-100">
               <Outlet />
            </div>
         </div>

      </div>
   )
}

export default LayoutAdmin
