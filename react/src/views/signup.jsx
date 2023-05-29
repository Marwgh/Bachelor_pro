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
    <div className="signup-section">
      <div>
        <form onSubmit={onSubmit}>
        <h1>
          Signup
        </h1>
        {errors && <div className="alert">

          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>

        }
        <input ref={nameRef} type="text" placeholder="Name"  />
        <input ref={emailRef} type="email" placeholder="email"  />
        {/* <input ref={companyRef} type="text" placeholder="Company"  /> */}
        {/* <input ref={jobRef} type="text" placeholder="job"  /> */}
        {/* <input ref={phoneRef} type="tel" placeholder="+00 000 000"  /> */}
        <input ref={passwordRef} type="password" placeholder="password"  />
        <input ref={passwordConfirmRef} type="password" placeholder="password Confirmation"  />
        <button type="submit" className="signupSubBtn">Signup</button>
        <p>
          Allready registered, <Link to="/login">Sign in</Link>
        </p>
        </form>
      </div>
    </div>
  )
}