import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"


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
            const response = await axios.get(`/api/users/vacations/${id}`)
            setYourVacation(response.data)
        } catch (error) {
        }
    }

    const deleteVacation = async (vacation) => {
        await axios.delete(`/api/delete/${vacation._id}`)
        try {
            const response = await axios.get(`/api/users/vacations/${id}`)
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
                        <Link to={`/users/vacations/${vacation._id}`} state={{vacation: vacation}}><button className="button" >Edit</button></Link>
                        <button className="button" onClick={() => deleteVacation(vacation)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Planner