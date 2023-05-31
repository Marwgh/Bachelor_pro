import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import UserInforModale from "./item/userInfo.jsx"
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Dashboard() {
  const [users,setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] = useState(false);
  const {setNotification} = useStateContext();
  const [userId,setUserId] = useState(null);
  const [quizzs,setQuizzs] = useState([]);
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
  function openModal(user) {
    setShowModal (true);
    setUserId(user.id);
    axiosClient.get('/quizz').then(({data})=> {
      setQuizzs(data)

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
            <th>COMPANY</th>
            <th>JOB</th>
            <th>PHONE</th>
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
              <td>{u.company}</td>
              <td>{u.job}</td>
              <td>{u.phone}</td>
              <td>
                <Link to={'/users/'+u.id} >Edit</Link>
                <button onClick={ev => onDelete(u)} >Delete</button>
                <button onClick={ev => openModal(u)}>Open info</button>
              </td>
            
            </tr>
          ))
          }
        </tbody>

        }
        
      </table>
      {showModal &&
        <UserInforModale userId={userId} setShowModal={setShowModal} quizzs={quizzs} />

        }
    </div>
  )
}