import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";



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

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout').then(()=>{
      setUser({})
      setToken(null)
    })
  }
  
  return (
    <div> 
      {user.admin &&
      <Link to="/dashboard">dashboard</Link>
      }
      {!token &&
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      }
      {token &&
        <div>
        {user.name}
        <a className="logoutBtn" onClick={onLogout} href="#">Logout</a>
      </div>


      }
      <Link to='/home' > Home</Link>
      <Link to="/quizz">Quizz</Link>
      <Link to="/blog">Blog</Link>
      {token &&
      <Link to="/users">users</Link>

      }

      <div>
        Open
      <Outlet/>
      </div>
    </div>

  )
}