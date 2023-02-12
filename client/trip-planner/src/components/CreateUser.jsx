import axios from "axios"
import { useState } from "react"


const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.prevent.default()
        try {
            const user = {email, password} 
            let response = await axios.post('',)
        } catch {

        }
    }




    return (
        <div className="signUpContainer">
            <div className="signUpForm" style={{ textAlign: 'center' }}>
                <h1>Ready to plan your adventure?</h1>
                <h2>Sign up below for a free account</h2>
                <div className="createUserField">
                        <form className="createUserForm">
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
                            <button onSubmit={handleSubmit} type="submit" style={{marginRight: '5em', borderRadius: '20px', border: 'none', outline: 'none', width: '20%', marginLeft: '4em'}}>Create User</button>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default CreateUser