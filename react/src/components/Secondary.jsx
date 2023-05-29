import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";


export default function SecondaryLayout() {
  const {token} = useStateContext()

  if (token) {
    return <Navigate to="/"/>
  }

  
  return (
    <div>
      <Link to='/home' > Home</Link>
      
      <div>
        Secondary
      <Outlet/>
      </div>
    </div>

  )
}