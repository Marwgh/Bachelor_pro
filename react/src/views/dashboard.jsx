import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Dashboard() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const {setNotification} = useStateContext()


  useEffect( () => {
    getUers();
  }, [])

  const onDelete = (u) => {
    if (!window.confirm(`Delete user ${u.firstName}?`)){
      return
    }

    axiosClient.delete(`/users/${u.id}`).then(()=>{
      setNotification(`user ${u.firstName} deleted`)
      getUers()
    })
  }

  const getUers = () => {
    setLoading(true)
    axiosClient.get('/users').then(({data})=> {
      setUsers(data)
      setLoading(false)
    }).catch(()=>{
      setLoading(false)
    })
  }

  return (
    <div>
      <div>
        <h1>Users</h1>
        <Link to={"/users/new"}>Add new</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CREATE</th>
            <th>POINTS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {loading && <tbody>
          
          <tr>
            <td colSpan="5">
              Loading...
            </td>
          </tr>
        </tbody>
        }
        {!loading && <tbody>
          {users.map(u=>(
            
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.created_at}</td>
              <td>{u.user_points}</td>
              <td>
                <Link to={'/users/'+u.id} >Edit</Link>
                <button onClick={ev => onDelete(u)} >Delete</button>
              </td>
            
            </tr>
          ))
          }
        </tbody>

        }
      </table>
    </div>
  )
}