import { Link } from "react-router"

function MainNav() {
  return (
    <nav className="bg-blue-800 text-white flex justify-between font-semibold px-8 py-2 rounded-b-md shadow">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  )
}

export default MainNav
