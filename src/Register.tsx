import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Register() {
  const api_url = __API_URL__;
  const register_url = __REGISTER_URL__;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
    try{
      const endpoint = `${api_url}/${register_url}`;
      const payload = {Email: email, Password: password};

      console.log(JSON.stringify(payload));
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      if(!response.ok){
        console.log(response);
        throw new Error(`Register failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log('Register success:', data);
    }
    catch(error: unknown){
      if(error instanceof Error){
        console.error(error.message);
      }
      else{
        console.log('Unknown error during registration', error);
      }
    }
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
            <button type="submit">Register</button>
        </fieldset>
            
        <div>
            <Link to="/">Already registered?  Login here</Link>
        </div>
    </form>
    </>
  )
}

export default Register
