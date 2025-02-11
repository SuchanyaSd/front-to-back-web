import useAuthStore from "../../store/auth-store"

function Logout() {
   const actionLogout = useAuthStore((state) => state.actionLogout)

   const hdlLogout = () => {
      console.log("Hello Logout")
   }
   return <div className="text-white">
      <button onClick={hdlLogout} className="hover:cursor-pointer">
         Logout
      </button>
   </div>
}

export default Logout
