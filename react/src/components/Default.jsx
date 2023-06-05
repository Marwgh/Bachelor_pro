import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";
import Footer from "../views/item/footer";


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
      <nav>
      <Link to='/home' className="logoNav"> <img src="../svg/logo.svg" alt="Endors Finass Logo" /></Link>
        <div className="linkHolder1">
          <Link to="/aboutUs">About Us</Link>
          <Link to="/quizz">Quizz</Link>
          <Link to="/blog">Blog</Link>
          <Link to="#">Get started</Link>
          {user.admin &&
            <Link to="/dashboard">dashboard</Link>
          }
        </div>
        <div className="linkHolder2">
          <Link className="button" to="/profile">profile</Link>
          <Link className="learnMore" to="#">Learn more about our approach</Link>
        </div>
      </nav>
      <div className="content">
        <div>
        </div>
        <div>
          {user.name}
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
    <Footer/>
    </div>

  )
}