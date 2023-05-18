import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";


export default function SecondaryLayout() {
  const {token} = useStateContext()

  if (token) {
    return <Navigate to="/"/>
  }

  
  return (
    <div>
      <div>
        Secondary
      <Outlet/>
      </div>
    </div>

  )
}