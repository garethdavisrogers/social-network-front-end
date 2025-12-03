import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleRegister(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log(`Submitting ${email} and ${password}`);
  }

  return (
    <>
      <form onSubmit={handleRegister}>
        <fieldset>
            <legend>Register</legend>
            <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
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
