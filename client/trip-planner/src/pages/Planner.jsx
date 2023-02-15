import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"


const Planner = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    
  
    return (
    <div className="plannerMainDiv">
        <div className="plannerOuterDiv">
            <div className="plannerTitle">Your Vacations</div>
            <div className="createCard" onClick={() => navigate(`/planner/${id}/create`)} style={{cursor: 'pointer'}}>
                <div className="createCardPlusDiv">
                    <div className="plus">+</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default Planner