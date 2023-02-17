import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const CreateUser = () => {

    let navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')



    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        setErrorMessage('')
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        setErrorMessage('')
    }
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
        setErrorMessage('')
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
        setErrorMessage('')
    }



    const handleSubmit = async (e) => {
        setErrorMessage('')
        console.log(`Username:${email} Password:${password}`);
        e.preventDefault()
        if (!firstName || !lastName || !email || !password) {
            setErrorMessage('Please fill out all fields')
        } else {
            try {
                let user = { firstName, lastName, email, password }
                let response = await axios.post('/api/createUser', user)
                console.log(response)
                if (response.data.message === 'User Created') {
                    navigate(`/`)
                }
            } catch (e) {
                if (e.response.data.message === 'Error occured') {
                    setErrorMessage('Email has already taken');
                }
            }
        }

    }




    return (
        <div className="signUpContainer">
            <div className="signUpForm" style={{ textAlign: 'center' }}>
                <h1>Ready to plan your adventure?</h1>
                <h2>Sign up below for a free account</h2>
                <h4>{errorMessage}</h4>
                <div className="createUserField">
                    <form className="createUserForm" onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            className="nameField"
                            type="text"
                            onChange={handleChangeFirstName}
                            value={firstName}
                        />
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            className="nameField"
                            type="text"
                            onChange={handleChangeLastName}
                            value={lastName}
                        />
                        <br />
                        <label htmlFor="email">Enter Email:</label>
                        <input className="emailInput"
                            id="email"
                            type="email"
                            onChange={handleChangeEmail}
                            value={email}
                            style={{ marginRight: '4em' }}
                        />
                        <br />
                        <label htmlFor="password">Enter Password:</label>
                        <input className="passwordInput"
                            id="password"
                            type="password"
                            onChange={handleChangePassword}
                            value={password}
                            style={{ marginRight: '6em' }}
                        />
                        <br />
                        <button type="submit" style={{ marginRight: '5em', borderRadius: '20px', border: 'none', outline: 'none', width: '20%', marginLeft: '4em' }}>Create User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateUser