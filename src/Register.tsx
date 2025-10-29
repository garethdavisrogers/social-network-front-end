import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form>
        <fieldset>
            <legend>Register</legend>
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
            <Link to="/">Already registered?  Login here</Link>
        </div>
    </form>
    </>
  )
}

export default Register
