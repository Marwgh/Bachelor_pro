import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";
import Footer from "../views/item/footer";


export default function DefaultLayout() {
  const {user, token, notification ,setUser} = useStateContext()
  if(!token){
    return <Navigate to="/home"/>
  }

  if(window.location.pathname == "/"){
    return <Navigate to="/home"/>
  }

  

  

  useEffect( () => {
    axiosClient.get('/user').then(({data})=>{
      if (data.email === "admin@admin.com") {
        data.admin = true;
      }
      setUser(data)
    })
  console.log(notification)

  },[])

  return (
    <>
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
          <Link className="learnMore" to="#"><img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" />Learn more about our approach</Link>
        </div>
      </nav>
      <div className="content">
        
        
        <>
          <Outlet/>
        </>
      </div>
      {notification && 
      <div className="notification">
      <div>
      {notification}
      </div>
    </div>
    }
    <Footer/>
    </>

  )
}