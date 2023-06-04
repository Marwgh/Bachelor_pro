import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import Footer from "../views/item/footer";


export default function SecondaryLayout() {
  const {token} = useStateContext()

  if (token) {
    return <Navigate to="/"/>
  }

  
  return (
    <div>
      
      <nav>
      <Link to='/home' > <img src="../logo.svg" alt="Endors Finass Logo" /></Link>
      <Link to="/aboutUs">About Us</Link>
      <Link to="/quizz">Quizz</Link>
      <Link to="/blog">Blog</Link>
      <Link to="#">Learn more about our approach</Link>

      </nav>
      <div>
        Secondary
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}