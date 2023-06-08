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
      <Link to='/home' className="logoNav" > <img src="../svg/logo.svg" alt="Endors Finass Logo" /></Link>
      <div className="linkHolder1">
        <Link to="/aboutUs">About Us</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">Get started</Link>
      </div>
      <div className="linkHolder2">
        <Link className="button" to="/signup">Sign up</Link>
        <Link className="learnMore" to="#"><img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" /> Learn more about our approach</Link>
      </div>
      
      </nav>
      <div>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}