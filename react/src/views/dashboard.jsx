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
  const [userEmail,setUserEmail] = useState(null);
  const [quizzs,setQuizzs] = useState([]);
  const [userPage,setUserPage] = useState(0)
  

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
      setUsers(sliceIntoChunks(data,5))
      setLoading(false)
      
      
    }).catch(()=>{
      setLoading(false)
    })
  }
  function openModal(user) {
    setShowModal (true);
    setUserEmail(user.email);
    axiosClient.get('/quizz').then(({data})=> {
      setQuizzs(data)
    })
  }
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}


  const length = users.length;

  const nextSlide = () => {
    setUserPage(userPage === length - 1 ? 0 : userPage + 1);
  };

  const prevSlide = () => {
    setUserPage(userPage === 0 ? length - 1 : userPage - 1);
  };

  


  console.log(userPage)
  

  return (
    <main id="dashboardPage">
      <div>
        <h1>Users</h1>
        <Link className="button" to={"/users/new"}>Add new User / Staff</Link>
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
        {loading && 
        <tbody>
          
          <tr>
            <td colSpan="5">
              Loading...
            </td>
          </tr>
        </tbody>
        }
        {!loading && 
        <>
          {users.map((a,index)=>(
            <>
            {index === userPage &&
            <tbody  key={"tbodyN"+index}>
              <tr className="pageNumber">
                <td>{index}</td>
              </tr>
              {a.map((u,Tindex)=>(
                <tr key={"trN"+Tindex}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.created_at}</td>
                  <td>{u.user_points}</td>
                  <td>{u.company}</td>
                  <td>{u.job}</td>
                  <td>{u.phone}</td>
                  <td>
                    <Link className="button" to={'/users/'+u.id} >Edit</Link>
                    <button className="button" onClick={ev => onDelete(u)} >Delete</button>
                    <button className="button" onClick={ev => openModal(u)}>Open info</button>
                  </td>
                </tr>
              ))}
            </tbody>
            }
            </>
          ))}
          </>
        }
        
        
      </table>

      {!loading &&
      <div className="slideBtnHolder">
        <div className="slideButtons" onClick={()=>nextSlide()  }>Next</div>
        <div className="slideButtons" onClick={()=> prevSlide()  }>Previous</div>
      </div>
      }
      
      {showModal &&
        <UserInforModale userEmail={userEmail} setShowModal={setShowModal} quizzs={quizzs} />

        }
    </main>
  )
}