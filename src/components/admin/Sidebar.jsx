import { User } from "lucide-react"
import { Link } from "react-router"
import { sidebarLink } from "../../utils/links"

function Sidebar() {
   return (
      <div className="bg-cyan-400 w-48">
         {/* Profile */}
         <div className="flex flex-col items-center my-12 gap-2">
            <User size={48} />
            <p>Profile</p>
         </div>
         {/* Profile */}

         {/* Navlink */}
         {
            sidebarLink.map((item) => {
               return (
                  <div>
                     <Link to={item.link} className="flex py-2 px-4 gap-2 hover:bg-pink-300 hover:duration-300">
                        {item.icon}
                        <p>{item.label}</p>
                     </Link>
                  </div>
               )
            })
         }
         {/* <div>
            <Link to="/admin" className="flex py-2 px-4 gap-2 hover:bg-pink-300 hover:duration-300">
               <LayoutDashboard />
               <p>Dashboard</p>
            </Link>
         </div> */}
         {/* Navlink */}
      </div>
   )
}

export default Sidebar
