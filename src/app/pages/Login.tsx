import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Login() {
  const api_url = __API_URL__;
  const login_url = __LOGIN_URL__;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    try{
      const endpoint = `${api_url}/${login_url}`;
      const payload = {Email: email, Password: password};

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      if(!response.ok){
        throw new Error(`Login failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log('Login success:', data);
    }
    catch(error: unknown){
      if(error instanceof Error){
        console.error(error.message);
      }
      else{
        console.log('Unknown error during login', error);
      }
    }
  };

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
