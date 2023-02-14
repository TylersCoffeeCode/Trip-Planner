import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"


const Planner = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    
  
    return (
    <div className="plannerMainDiv">
        <div className="plannerOuterDiv">
            <div className="plannerTitle">Your Vacations</div>
            <div className="createCard" onClick={() => navigate('/planner/create')} style={{cursor: 'pointer'}}>
                <div className="createCardPlusDiv">
                    <div className="plus">+</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default Planner