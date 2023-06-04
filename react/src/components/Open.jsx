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
        <Link to='/home' > <img src="../logo.svg" alt="Endors Finass Logo" /></Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/blog">Blog</Link>
        {!token &&
          <Link to="/signup">Signup</Link>
        }
        {token &&
        <Link to="/profile">profile</Link>
        }
      <Link to="#">Learn more about our approach</Link>

      </nav>

      <div>
        Open
      <Outlet/>
      </div>
      <Footer/>

    </div>

  )
}