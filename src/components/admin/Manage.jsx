import useAuthStore from "../../store/auth-store"
import { useEffect, useState } from "react"
import { actionDeleteUser, actionListUser, actionUpdateRole } from "../../api/user"
import { Trash2 } from "lucide-react"
import { createAlert } from "../../utils/createAlert"
import Swal from "sweetalert2"

function Manage() {

   const [users, setUsers] = useState([])
   const token = useAuthStore((state) => state.token)
   console.log(token)

   useEffect(() => {
      hdlFetchUsers(token)
   }, [])

   const hdlFetchUsers = async (token) => {
      try {
         const res = await actionListUser(token)
         setUsers(res.data.result)
      } catch (error) {
         console.log(error)
      }
   }

   const hdlUpdateRole = async (token, id, role) => {
      console.log(token, id, role)
      try {
         const res = await actionUpdateRole(token, {id, role})
         createAlert("Success", "Update Role Success!!")
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }

   const hdlDeleteUser = async (token, id) => {
      console.log(token, id)
      try {
         Swal.fire({
            icon : "info",
            text : "Are you sure?",
            // showDenyButton : true,
            showCancelButton : true,
            showCloseButton : true
         }).then( async (data) => {
            console.log(data.isConfirmed)
            if (data.isConfirmed) {
               const res = await actionDeleteUser(token, id)
               console.log(res)
               createAlert("Success", "Delete Success!!")
               hdlFetchUsers(token)
            }
         })
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role Name</th>
                  <th>Action</th>
               </tr>
            </thead>

            <tbody>
               {
                  users.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{item.firstname}</td>
                           <td>{item.lastname}</td>
                           <td>{item.email}</td>
                           <td>{item.role}</td>
                           <td>
                              <select defaultValue={item.role} onChange={(e) => hdlUpdateRole(token, item.id, e.target.value)}>
                                 <option>USER</option>
                                 <option>ADMIN</option>
                              </select>
                           </td>
                           <td><Trash2 color="red" onClick={() => hdlDeleteUser(token, item.id)}/></td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   )
}

export default Manage
