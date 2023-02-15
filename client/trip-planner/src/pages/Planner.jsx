import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"


const Planner = ({ setIsLoggedIn }) => {

    const navigate = useNavigate()
    const [yourVacation, setYourVacation] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setIsLoggedIn(true)
        getVacations()
    }, [])

    const getVacations = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/users/vacations/${id}`)
            console.log(response.data);
            setYourVacation(response.data)
        } catch (error) {

        }
    }



    return (
        <div className="plannerMainDiv">
            <div className="plannerOuterDiv">
                <div className="plannerTitle">Your Vacations</div>
                <div className="createCard" onClick={() => navigate(`/planner/${id}/create`)} style={{ cursor: 'pointer' }}>
                    <div className="createCardPlusDiv">
                        <div className="plus">+</div>
                    </div>
                </div>
                {yourVacation.map((vacation)=> (
                        <div className="vacationCard" key={vacation._id}>
                        <h2 style={{margin: 0, padding: 0}}>Your vacation plan for:<br/>{vacation.location}</h2>
                        <h2 style={{margin: 0, padding: 0}}>Party of: {vacation.numberOfTravelers}</h2>
                        <p>{vacation.questionOne},{vacation.questionTwo},{vacation.questionThree}</p>
                        <p>{vacation.extraInfo}</p>
                        <button className="button">Edit</button>
                        <button className="button">Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Planner