import { useRef,useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/contextProvider";



export default function Signup() {

  const {setUser, setToken} = useStateContext()

  
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const companyRef = useRef();
  // const jobRef = useRef();
  // const phoneRef = useRef();
  const [errors, setErrors] = useState(null);



  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name :nameRef.current.value,
      email :emailRef.current.value,
      // company :companyRef.current.value,
      // job :jobRef.current.value,
      // phone :phoneRef.current.value,
      password :passwordRef.current.value,
      password_confirmation :passwordConfirmRef.current.value
    }
    console.log(payload);
    
    axiosClient.post('/signup', payload)
    .then((data)=>{

      setUser(data.data.user)
      setToken(data.data.token)
    })
    .catch(error => {
      const response = error.response;
      if (response && response.status === 422) {
        console.log(response.data.errors);
        setErrors(response.data.errors);
      }
    })

  }
  return (
    <main id="signupPage">
      <div>
        <form onSubmit={onSubmit}>
        <h1>
          Signup
        </h1>
        {errors && <div className="alert">

          {Object.keys(errors).map(key => (
            <p className="errorMessage" key={key}>{errors[key][0]}</p>
          ))}
        </div>

        }
        <div>
          <label htmlFor="">Full Name</label>
          <input ref={nameRef} type="text" placeholder="Name"  />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input ref={emailRef} type="email" placeholder="email"  />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input ref={passwordRef} type="password" placeholder="password"  />
        </div>
        <div>
          <label htmlFor="">Password Confirmation</label>
          <input ref={passwordConfirmRef} type="password" placeholder="password Confirmation"  />
        </div>
        
        <button type="submit" className="button">Signup</button>
        <p>
          Allready registered, <Link to="/login" >Sign in</Link>
        </p>
        </form>
      </div>
      <div>
        <img src="images/fillerSL.png" alt="" />
      </div>
    </main>
  )
}