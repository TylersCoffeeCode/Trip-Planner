import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'



const CreateVacation = ({ setIsLoggedIn }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    const [numberOfTravelers, setNumberOfTravelers] = useState("")
    const [location, setLocation] = useState("")
    const [questionOne, setQuestionOne] = useState("")
    const [questionTwo, setQuestionTwo] = useState("")
    const [questionThree, setQuestionThree] = useState("")




    const [freeForm, setFreeForm] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        let filledForm = { numberOfTravelers, location, questionOne, questionTwo, questionThree, freeForm }
        try {
        const response = await axios.post(`http://localhost:3001/api/create/vacations/${id}`, filledForm)
        navigate(`/planner/${id}`)
        } catch(error) {
            console.log(error);
        }
    } 


    return (
        <div className="createVacationDiv">
            <div className="pageDiv">
                <form className="vacationForm" onSubmit={handleSubmit}>
                    <h1>Horizon Planner</h1>
                    <label>
                        Number of travelers
                        <input style={{ margin: '0.5em', width: '2em' }}
                            type='number'
                            value={numberOfTravelers}
                            onChange={e => setNumberOfTravelers(e.target.value)}
                        />
                    </label>
                    <label>
                        <h3 style={{ padding: 0, margin: 0 }}>Where do you want to travel to?</h3>
                        <br />
                        <input
                            type='text'
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </label>
                    <br />
                    <h2 style={{ fontSize: '20px' }}>What are three things you wish to experience once you're there</h2>
                    <label>
                        Activity 1:
                        <br />
                        <input
                            type='text'
                            value={questionOne}
                            onChange={e => setQuestionOne(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Activity 2:
                        <br />
                        <input
                            type='text'
                            value={questionTwo}
                            onChange={e => setQuestionTwo(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Activity 3:
                        <br />
                        <input
                            type='text'
                            value={questionThree}
                            onChange={e => setQuestionThree(e.target.value)}
                        />
                    </label>
                    <h2>Additional Info:</h2>
                    <textarea style={{ width: '90%', height: '8rem' }}
                        value={freeForm}
                        onChange={e => setFreeForm(e.target.value)}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    )
}
export default CreateVacation