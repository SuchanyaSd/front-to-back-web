import { Route, Routes } from "react-router"
import Layout from "./Layouts/Layout"
import Home from "../pages/Home"
import Abouth from "../pages/Abouth"
import Login from "../pages/auth/Login"
// import Register from "../pages/auth/Register"
import Dashboard from "../pages/admin/Dashboard"
import Manage from "../pages/admin/Manage"
import HomeUser from "../pages/user/HomeUser"
import Register1 from "../pages/auth/Register1"
import ProtectRoute from "./ProtectRoute"
import LayoutAdmin from "./Layouts/LayoutAdmin"

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<><Layout/></>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<Abouth/>} />
            <Route path="register" element={<Register1/>}/>
            <Route path="login" element={<Login/>} />
        </Route>

        {/* Private [USER] */}
        <Route path="user" element={<ProtectRoute el={<Layout/>} allows={["USER"]}/>}>
            <Route index element={<HomeUser/>}/>
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={<ProtectRoute el={<LayoutAdmin/>} allows={["ADMIN"]}/>}>
            <Route index element={<Dashboard/>} />
            <Route path="manage" element={<Manage/>} />
        </Route>

        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  )
}

export default AppRoutes
