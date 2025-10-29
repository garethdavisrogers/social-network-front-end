import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <fieldset>
            <legend>Login</legend>
            <div className="form-group">
                <label>User Name</label>
                <input type="text" placeholder='username'/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder='password'/>
            </div>
            <button type="submit">Log In</button>
        </fieldset>
            
        <div>
            <Link to="/register">Not a member?  Register here</Link>
        </div>
    </form>
    </>
  )
}

export default Login
