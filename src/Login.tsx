import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log(`Submitting ${email} and ${password}`);
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <fieldset>
            <legend>Login</legend>
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
            <Link to="/register">Not a member?  Register here</Link>
        </div>
    </form>
    </>
  )
}

export default Login
