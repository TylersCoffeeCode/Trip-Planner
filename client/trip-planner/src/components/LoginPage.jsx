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
    <div className="logInContainer" style={{ display: "flex", textAlign: 'center', width: '80vh', height: '80vh', margin: '80px auto', top: '8em' }}>
      <div className="loginBothContainer" style={{display: 'flex', marginTop: '3em'}}>
        <div className="loginLeftSide" style={{ width: '15em', height: '100%', borderRadius: '50px 0px 0px 50px'}}>
          Hello
        </div>
        <div className="loginRightSide" style={{ backgroundColor: '#87889c', width: '29em', borderRadius: '0 50px 50px 0' }}>
          <h1>Welcome to Horizon</h1>
          <h2>Let's see beyond</h2>
          <h3>Please Log In</h3>
          <form onSubmit={handleSubmit} style={{ width: '15em', textAlign: 'right', margin: '0 auto', marginLeft: '4.5em'}}>
            <label htmlFor="email">Email:</label>
            <input style={{ margin: '6px', border: 'none', outline: 'none', borderRadius: '20px', height: '2em', padding: '0 6px' }}
              id="email"
              type='email'
              onChange={handleChangeEmail}
              value={email}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input style={{ margin: '6px', border: 'none', outline: 'none', borderRadius: '20px', height: '2em', padding: '0 6px' }}
              id="password"
              type='password'
              onChange={handleChangePassword}
              value={password}
            />
            <br />
            <button type="submit" style={{ marginRight: '4em', borderRadius: '20px', border: 'none', outline: 'none' }}>Sign In</button>
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