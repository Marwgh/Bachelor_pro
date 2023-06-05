import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";
import Footer from "../views/item/footer";



export default function OpenLayout() {
  const {user, token ,setUser,setToken} = useStateContext()

  if(token){
    useEffect( () => {
      axiosClient.get('/user').then(({data})=>{
        if (data.email === "admin@admin.com") {
          data.admin = true;
        }
        setUser(data)
      })
    },[])
  }

  
  return (
    <div> 
      <nav>
        {user.admin &&
        <Link to="/dashboard">dashboard</Link>
        }
        <Link to='/home' className="logoNav"> <img src="../svg/logo.svg" alt="Endors Finass Logo" /></Link>
        <div className="linkHolder1">
          <Link to="/aboutUs">About Us</Link>
          <Link to="/quizz">Quizz</Link>
          <Link to="/blog">Blog</Link>
          <Link to="#">Get started</Link>
        </div>
        <div className="linkHolder2">
          {!token &&
            <Link className="button" to="/login">Sign in</Link>
          }
          {token &&
            <Link className="button" to="/profile">profile</Link>
          }
          <Link className="learnMore" to="#">Learn more about our approach</Link>
        </div>

      </nav>

      <div>
      <Outlet/>
      </div>
      <Footer/>

    </div>

  )
}