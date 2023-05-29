import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
  const {user, token, notification ,setUser,setToken} = useStateContext()
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
      if (data.email === "admin@admin.com") {
        data.admin = true;
      }
      setUser(data)
    })
  },[])
  return (
    <div id="defaultLayout">
      <div>
      {user.admin &&
      <Link to="/dashboard">dashboard</Link>
      }
      <Link to="/users">users</Link>
      <Link to="/home">Home</Link>
      <Link to="/quizz">Quizz</Link>
      <Link to="/blog">Blog</Link>
      </div>
      <div className="content">
        <div>
          header
        </div>
        <div>
          {user.name}
          {console.log(user)}
          <a className="logoutBtn" onClick={onLogout} href="#">Logout</a>
        </div>
        <main>
          <Outlet/>
        </main>
      </div>
      {notification && 
      <div>
      {notification}
    </div>}
    </div>

  )
}