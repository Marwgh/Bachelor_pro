import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import Footer from "../views/item/footer";


export default function SecondaryLayout() {
  const {token} = useStateContext()

  if (token) {
    return <Navigate to="/home"/>
  }
  if(window.location.pathname == "/"){
    return <Navigate to="/home"/>
  }

  
  return (
    <>
      <nav>
      <Link to='/home' className="logoNav" > <img src="../svg/logo.svg" alt="Endors Finass Logo" /></Link>
      <div className="linkHolder1">
        <Link to="/aboutUs">About Us</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/construction">Get started</Link>
      </div>
      <div className="linkHolder2">
        <Link className="button" to="/login">Sign in</Link>
        <Link className="learnMore" to="/construction"><img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" /> Learn more about our approach</Link>
      </div>
      
      </nav>
      <>
      <Outlet/>
      </>
      <Footer/>
    </>
  )
}