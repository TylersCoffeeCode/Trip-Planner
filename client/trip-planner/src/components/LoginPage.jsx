import { useState } from "react"
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const LoginPage = () => {

  let navigate = useNavigate()
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
    try {
      let user = { email, password }
      let response = await axios.post('http://localhost:3001/api/login', user)
      console.log(response.data);
      if (response.data.message === 'Login successful') {
        console.log('NICE');
        navigate('/user/dashboard')
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail('')
    setPassword('')
  }


  return (
    <div className="logInContainer">
      <div className="loginBothContainer" >
        <div className="loginLeftSide" >
        </div>
        <div className="loginRightSide">
          <h1 style={{fontSize: '2rem'}}>Welcome to Horizon</h1>
          <h2>Let's see beyond</h2>
          <h3>Please Log In</h3>
          <form className="signInForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input className="emailInput"
              id="email"
              type='email'
              onChange={handleChangeEmail}
              value={email}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input className="passwordInput"
              id="password"
              type='password'
              onChange={handleChangePassword}
              value={password}
            />
            <br />
          <button type="submit" style={{ marginRight: '4em', borderRadius: '20px', border: 'none', outline: 'none', width: '20%', marginLeft: '4em'}}>Sign In</button>
          </form>
          <h3>or</h3>
          <Link to={'/sign-up'}><h4>Create an account</h4></Link>
        </div>
        {/* <Link>Sign Up</Link> */}
      </div>
    </div>
  )
}
export default LoginPage