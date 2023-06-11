import { useStateContext } from "../context/contextProvider";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";


export default function Profile() {
  const {user, setUser,setToken} = useStateContext()

  
  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout').then(()=>{
      setUser({})
      setToken(null)
    })
  }
  return (
    <main id="profilePage">
      <h1>
        Hello {user.name}
      </h1>
      <p>
        Email : {user.email}
      </p>
      {user.company !== "no answers" &&
        <p>
          Your company : {user.company}
        </p>
      }
      {user.phone !== "no answers" &&
        <p>
          Your phone : {user.phone}
        </p>
      }
      {user.job !== "no answers" &&
        <p>
          Your job : {user.job}
        </p>
      }
      <div>
          <Link className="button" to={'/users/'+user.id} >Edit</Link>
          <Link className="button" onClick={onLogout}>Logout</Link>
        </div>
    </main>
  )
}