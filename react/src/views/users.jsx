import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";



export default function Users() {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);


  useEffect( () => {
    getUers();
  }, [])

  const onDelete = (u) => {
    if (!window.confirm(`Delete user ${u.firstName}?`)){
      return
    }

    axiosClient.delete(`/user/${u.id}`).then(()=>{
      //Show notif
      getUers()
    })
  }

  const getUers = () => {
    setLoading(true)
    axiosClient.get('/user').then(({data})=> {
      console.log(data);
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
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>CREATE</th>
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
            <tr key='key'>
              <td>{u.id}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.created_at}</td>
              <td>
                <Link to={'/users/'+u.id} >Edit</Link>
                <button onClick={ev => onDelete(u)} >Delete</button>
              </td>
            
            </tr>
          ))}
        </tbody>

        }
      </table>
    </div>
  )
}