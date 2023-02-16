import { useState, useEffect } from "react"
import axios from 'axios'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const LoginPage = ({setIsLoggedIn}) => {

  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')


  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    setErrorMessage('')
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    setErrorMessage('')
  }

    useEffect(() => {
    setIsLoggedIn(false)

  }, [])
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Username: ${email} Password: ${password}`)
    try {
      let user = { email, password }
      let response = await axios.post('/api/login', user)
      console.log(response);
      if (response.data.message === 'Login successful') {
        console.log('NICE');
        sessionStorage.setItem('userId', response.data.id)
        navigate(`/user/dashboard/${response.data.id}`)
        setIsLoggedIn(true)
      } else {
        console.log(response.data.message);
      }
    } catch (e) {
      console.log(e);
      if(e.response.data.message === 'Email not found') {
        setErrorMessage('Email not found')
      } else if(e.response.data.message === 'Your password is incorrect') {
        setErrorMessage('Your password is incorrect')
      }
    }
    setEmail('')
    setPassword('')
  }


  return (
    <div className="logInContainer">
      <div className="loginBothContainer" >
        <div className="loginLeftSide" >
          <div className="loginInfo">
            <h3>Plan your next<br />  adventure with Horizon</h3>
            <p>Whether you're planning a weekend getaway or month-long journey, Horizon has everything you need to make your trip a success. Stop dreaming and start planning your trip today with Horizon!</p>
          </div>
        </div>
        <div className="loginRightSide">
          <h1 style={{fontSize: '2rem'}}>Welcome to Horizon</h1>
          <h2>Let's see beyond</h2>
          <h3>Please Log In</h3>
          <h4>{errorMessage}</h4>
          <form className="signInForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input className="emailInput" style={{backgroundColor: 'whitesmoke'}}
              id="email"
              type='email'
              onChange={handleChangeEmail}
              value={email}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input className="passwordInput" style={{backgroundColor: 'whitesmoke'}}
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