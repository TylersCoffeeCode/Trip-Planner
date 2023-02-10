import { useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  
  
  const initialState = {
    email: '',
    password: '',
  }
  
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({...form, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.get('http://localhost:3001/api/users/')
    setForm(initialState)
    console.log(response)
    console.log(initialState)
  }
  
  
  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            type='email'
            onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
            id="password"
            type='password'
            onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Sign In</button>
        </form>
        <p>or</p>
        {/* <Link>Sign Up</Link> */}
        
      </div>
    </div>
  )
}
export default LoginPage