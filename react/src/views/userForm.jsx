import { useEffect, useState } from "react"
import { useNavigate,Link, useParams } from "react-router-dom"
import axiosClient from "../axios-client";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function UserForm() {
  const navigate = useNavigate();
  let {id} = useParams();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)
  const {setNotification} = useStateContext()
  
  if (id) {
    useEffect(() => {
      
      setLoading(true)
      axiosClient.get(`/users/${id}`)
        .then(({data}) => {
          setLoading(false)
          setUser(data)
        })
        .catch(() => {
          setLoading(false)
        })
    }, [])
  }

  const onSubmit = ev => {
    ev.preventDefault()
    if (!user.job || user.job.length < 2) {
      user.job = "no answers"
    }
    if  (!user.phone || user.phone.length < 2) {
      user.phone = "no answers"
    }
    if ( !user.company || user.company.length < 2) {
      user.company = "no answers"
    }
    if (user.id) {
      axiosClient.put(`/users/${user.id}`, user)
        .then(() => {
          
          setNotification('User was successfully updated')
          navigate('/dashboard')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    } else {
      axiosClient.post('/users', user)
        .then(() => {
          setNotification('User was successfully created')
          navigate('/dashboard')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }
  }

  return (
    <main id="userFormPage">
      {user.id && <h1>{user.name} </h1>}
      {!user.id && <h1>New staff / User</h1>}
      <div className="card animated fadeInDown">
        {loading && (
          <div className="text-center">
            Loading...
          </div>
        )}
        {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p className="errorMessage" key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        {!loading && (
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="">Name</label>
            <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="">Email</label>
            <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="">Password</label>
            <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
            </div>
            <div>
              <label htmlFor="">Password Confirmation</label>
            <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
            </div>
            <div>
              <Link className="button" onClick={()=> navigate(-1)}>Cancel</Link>
              <button className="button">Save</button>  
            </div>
          </form>
        )}
        
      </div>
    </main>
  )
}