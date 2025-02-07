import axios from "axios"
import { useState } from "react"
import { createAlert } from "../../utils/createAlert"

function Register() {
  //Javascript
  const [value, setValue] = useState({
    email : "",
    firstname : "",
    lastname : "",
    password : "",
    confirmPassword : ""
  })
  const hdlOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    })
  }
  const hdlSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/register", value)
      console.log(res)
      createAlert("success", "Register Success")
    } catch (err) {
      
      createAlert("info", err.response.data.message)
      console.log(err.response.data.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>
        {/* Form */}
        <form onSubmit={hdlSubmit}>
          <div className="flex flex-col gap-2 py-4">
            <input type="text" placeholder="Email" name="email"
              className="border w-full border-gray-700 rounded-md p-1 px-4"
              onChange={hdlOnChange}
            />
            <input type="text" placeholder="firstname" name="firstname"
              className="border w-full border-gray-700 rounded-md p-1 px-4"
              onChange={hdlOnChange}
            />
            <input type="text" placeholder="lastname" name="lastname"
              className="border w-full border-gray-700 rounded-md p-1 px-4"
              onChange={hdlOnChange}
            />
            <input type="text" placeholder="password" name="password"
              className="border w-full border-gray-700 rounded-md p-1 px-4"
              onChange={hdlOnChange}
            />
            <input type="text" placeholder="confirmPassword" name="confirmPassword"
              className="border w-full border-gray-700 rounded-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-teal-500 px-2 py-1 rounded-md hover:cursor-pointer">Register</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register
