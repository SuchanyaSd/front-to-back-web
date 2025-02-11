import { useEffect, useState } from "react"
import useAuthStore from "../store/auth-store"
import { actionCurrentUser } from "../api/auth"

function ProtectRoute({el, allows}) {
   const [ok, setOk] = useState(null)
   // console.log("Hello, Protect Route")
   // const user = useAuthStore((state) => state.user)
   const token = useAuthStore((state) => state.token)
   // console.log(user.role)
   console.log(token)

   useEffect(() => {
      checkPermission()
   }, [])


   const checkPermission = async () => {
      console.log("Check permission")
      try {
         const res = await actionCurrentUser(token)
         // console.log(res)
         const role = res.data.result.role
         // console.log(role)

         // if (allows.includes(role)) {
         //    setOk(true)
         // } else {
         //    setOk(false)
         // }
         setOk(allows.includes(role))
      } catch (error) {
         console.log(error)
         setOk(false)
      }
   }
   console.log(ok)
   if (ok === null) {
      return <h1>Loading...</h1>
   }
   if (!ok) {
      return <h1>Unauthorized!!!</h1>
   }
   return el
}

export default ProtectRoute
