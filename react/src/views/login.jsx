import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import { useState } from "react";


export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    setErrors(null)
    

    axiosClient.post('/login', payload)
      .then(({data}) => {
        if (data.user.email === "admin@admin.com") {
          data.user.admin = true;
        }
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {

        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors)
          }else {
            setErrors({
              email:[response.data.message]
            })
          }
          
        }
      })
  }

  return (
    <main >
      <div >
        <form onSubmit={onSubmit}>
          <h1 >
          Welcome to Endorfinas Media <br /> 
          Sign in to continue 
          </h1>

          {errors && <div>

          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>

        }
          

          <input ref={emailRef} type="email" placeholder="Email"/>
          <input ref={passwordRef} type="password" placeholder="Password"/>
          <button >Login</button>
          <p>Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </main>
  )
}