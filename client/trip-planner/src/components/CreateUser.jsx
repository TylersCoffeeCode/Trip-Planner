import axios from "axios"
import { useState } from "react"


const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }


    const handleSubmit = async (e) => {
        console.log(`Username:${email} Password:${password}`);
        e.preventDefault()
        try {
            let user = {firstName, lastName, email, password} 
            await axios.post('http://localhost:3001/api/createUser', user)
            console.log();

        } catch (e) {
            console.log(e);
        }
    }




    return (
        <div className="signUpContainer">
            <div className="signUpForm" style={{ textAlign: 'center' }}>
                <h1>Ready to plan your adventure?</h1>
                <h2>Sign up below for a free account</h2>
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
                            style={{marginRight: '4em'}}
                            />
                            <br />
                            <label htmlFor="password">Enter Password:</label>
                            <input className="passwordInput"
                            id="password"
                            type="password"
                            onChange={handleChangePassword}
                            value={password}
                            style={{marginRight: '6em'}}
                            />
                            <br />
                            <button type="submit" style={{marginRight: '5em', borderRadius: '20px', border: 'none', outline: 'none', width: '20%', marginLeft: '4em'}}>Create User</button>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default CreateUser