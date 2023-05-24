import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
  const {user, token,setUser,setToken} = useStateContext()
  if(!token){
    return <Navigate to="/login"/>
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout').then(()=>{
      setUser({})
      setToken(null)
    })
  }

  useEffect( () => {
    axiosClient.get('/user').then(({data})=>{
      setUser(data)
    })
  },[])
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