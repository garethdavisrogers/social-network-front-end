import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import ErrorList from '../../components/ErrorList';
import '../App.css'

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    try{

      const payload = {Email: email, Password: password};

      const response = await login(payload);

      if(!response.ok){
        setErrors(response.errors);
        throw new Error(`Login failed with status ${response.status}`);
      }
      navigate("/home");
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
        {errors.length > 0 && <ErrorList errors={errors}/>}
        <div>
            <Link to="/register">Not a member?  Register here</Link>
        </div>
    </form>
    </>
  )
}

export default Login
