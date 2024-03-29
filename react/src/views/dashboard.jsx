import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link, useNavigate } from "react-router-dom";
import UserInforModale from "./item/userInfo.jsx"
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Dashboard() {
  const [users,setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] = useState(false);
  const {user,setNotification} = useStateContext();
  const [userEmail,setUserEmail] = useState(null);
  const [quizzs,setQuizzs] = useState([]);
  const [userPage,setUserPage] = useState(0);
  const [chunkedUsers,setChunkedUsers] = useState([])
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");

  }
  useEffect( () => {
    getUers();
  }, [])
  useEffect(() => {
    if (user.email !== "admin@admin.com" && user.email !== undefined) {
      goHome()
    }
  }, [user])
  
  
  const onDelete = (u) => {
    if (!window.confirm(`Delete user ${u.name}?`)){
      return
    }

    axiosClient.delete(`/users/${u.id}`).then(()=>{
      setNotification(`user ${u.name} deleted`)
      getUers()
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }
    })
  }

  const getUers = () => {
    setLoading(true)
    axiosClient.get('/users').then(({data})=> {
      setUsers(data)
      setChunkedUsers(sliceIntoChunks(data,5))
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
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }
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


  const length = chunkedUsers.length;

  const nextSlide = () => {
    setUserPage(userPage === length - 1 ? 0 : userPage + 1);
  };

  const prevSlide = () => {
    setUserPage(userPage === 0 ? length - 1 : userPage - 1);
  };

  const filterCompany = () => { 
    const sorting = [...users].sort((a, b) => a.user_points < b.user_points ? 1 : -1,);
    setChunkedUsers(
      sliceIntoChunks(sorting,5)
    )
  }

  const filterPoints = () => {
    const sorting = [...users].sort((a, b) => a.company < b.company ? 1 : -1,);
    setChunkedUsers(
      sliceIntoChunks(sorting,5)
    )
  }
  
  

  

  return (
    <main id="dashboardPage">
      <div>
        <h1>Users</h1>
        <Link className="button" to={"/users/new"}>Add new User / Staff</Link>
        <div className="sorters"> 
          <h2>Filter:</h2>
          <div className="button" onClick={()=> filterCompany()}>points</div>
          <div className="button" onClick={()=> filterPoints()}>company</div>
        </div>
      </div>
      {errors &&
                <div className="errorMessage">
                  {Object.keys(errors).map(key => (
                  <p key={"error"+key}>{errors[key][0]}</p>
                  ))}
                </div>
      }
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
          {chunkedUsers.map((a,index)=>(
            <>
            {index === userPage &&
            <tbody  key={"tbodyN"+index}>
              
              {a.map((u,Tindex)=>(
                <>
                {u.email !== "admin@admin.com" &&
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
                }
                </>
              ))}
            </tbody>
            }
            </>
          ))}
          </>
        }
        
        
      </table>
      <div className="pageNumber">
        <p>{userPage}</p>
      </div>
      {!loading &&
      <div className="slideBtnHolder">
        <div className="slideButtons" onClick={()=> prevSlide()  }>Previous</div>
        <div className="slideButtons" onClick={()=>nextSlide()  }>Next</div>
      </div>
      }
      
      {showModal &&
        <UserInforModale userEmail={userEmail} setShowModal={setShowModal} quizzs={quizzs} />

        }
    </main>
  )
}