import { useEffect } from "react"


const Planner = ({setIsLoggedIn}) => {
    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

  
    return (
    <div>Planner</div>
  )
}
export default Planner