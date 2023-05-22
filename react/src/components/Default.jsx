import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

export default function DefaultLayout() {
  const {user, token} = useStateContext()
  console.log(user);
  if(!token){
    return <Navigate to="/login"/>
  }

  const onLogout = (ev) => {
    ev.preventDefault();
  }
  return (
    <div id="defaultLayout">
      <div>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/users">users</Link>
      </div>
      <div className="content">
        <div>
          header
        </div>
        <div>
          {user.firstName}
          <a className="logoutBtn" onClick={onLogout} href="#">Logout</a>
        </div>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>

  )
}