import useAuthStore from "../../store/auth-store"
import {createAlert} from "../../utils/createAlert"
import { useNavigate } from "react-router"

function Logout() {
   const actionLogout = useAuthStore((state) => state.actionLogout)
   const navigate = useNavigate()

   const hdlLogout = () => {
      // console.log("Hello Logout")
      createAlert("Success", "Logout Success")
      actionLogout()
      navigate("/")
   }
   return <div className="text-white">
      <button onClick={hdlLogout} className="hover:cursor-pointer">
         Logout
      </button>
   </div>
}

export default Logout
