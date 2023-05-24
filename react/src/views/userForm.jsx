import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../axios-client";

export default function UserForm() {
  const {id} = useParams()
  const [loading,setLoading] = useState(false)
  const [user,setUser] = useState({
    id:null,
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    passwordConfirmation:''
  });

  if (id) {
    useEffect(()=>{
      setLoading(true)
      axiosClient.get(`/user/${id}`).then(({data})=>{
        setUser(data)
        setLoading(false)
      }).catch(()=>{
        setLoading(false)
      })
    }, [])
  }
  return (
    <div>
      <h1>User Form</h1>

    </div>
  )
}