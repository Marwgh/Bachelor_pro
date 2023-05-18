import { Link } from "react-router-dom";



export default function Signup() {

  const onSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div className="signup-section">
      <div>
        <form onSubmit={onSubmit}>
        <h1>
          Signup
        </h1>
        <input type="text" name="" placeholder="First Name" id="" />
        <input type="text" name="" placeholder="Last Name" id="" />
        <input type="email" placeholder="email" name="" id="" />
        <input type="password" placeholder="password" name="" id="" />
        <input type="password" placeholder="password Confirmation" name="" id="" />
        <button className="signupSubBtn">Signup</button>
        <p>
          Allready registered, <Link to="/login">Sign in</Link>
        </p>
        </form>
      </div>
    </div>
  )
}