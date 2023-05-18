import { Link } from "react-router-dom";

export default function Login() {

  const onSubmit = (ev) => {
    ev.preventDefault();
  }


  return (
    <div className="login-section">
      <div>
        <form onSubmit={onSubmit}>
        <h1>
          Login
        </h1>
        <input type="email" placeholder="email" name="" id="" />
        <input type="password" placeholder="password" name="" id="" />
        <button className="loginSubBtn">Login</button>
        <p>
          Not registered, <Link to="/signup">Create an account</Link>
        </p>
        </form>
      </div>
    </div>
  )
}