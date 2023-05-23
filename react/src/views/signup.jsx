import { useRef,useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/contextProvider";



export default function Signup() {

  const {setUser, setToken} = useStateContext()

  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [errors, setErrors] = useState(null);



  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      firstName :firstNameRef.current.value,
      lastName :lastNameRef.current.value,
      email :emailRef.current.value,
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
        <input ref={firstNameRef} type="text" placeholder="First Name"  />
        <input ref={lastNameRef} type="text" placeholder="Last Name"  />
        <input ref={emailRef} type="email" placeholder="email"  />
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