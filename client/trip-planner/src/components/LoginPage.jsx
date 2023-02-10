import { useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Username: ${email} Password: ${password}`)
    let user = {email, password}
    let response = await axios.get('http://localhost:3001/api/users', user)
    console.log(response);
    setEmail('')
    setPassword('')
  }

  
  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            type='email'
            onChange={handleChangeEmail}
            value={email}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
            id="password"
            type='password'
            onChange={handleChangePassword}
            value={password}
            />
            <br />
            <button type="submit">Sign In</button>
        </form>
        <p>or</p>
        {/* <Link>Sign Up</Link> */}
        
      </div>
    </div>
  )
}
export default LoginPage