import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ErrorList from '../../components/ErrorList';
import '../App.css'

function Register() {
  const api_url = __API_URL__;
  const register_url = __REGISTER_URL__;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
    try{
      const endpoint = `${api_url}/${register_url}`;
      const payload = {email: email, password: password};

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      const body = await response.json();

      if(!response.ok){
        // setErrors(Array.isArray(body) ? body.errors : Object.values(body.errors ?? {}).flat());
        console.log(response);
        throw new Error(`Register failed with status ${response.status}`);
      }
      navigate("/home");
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
        {errors.length > 0 && <ErrorList errors={errors}/>}
        <div>
            <Link to="/">Already registered?  Login here</Link>
        </div>
    </form>
    </>
  )
}

export default Register
