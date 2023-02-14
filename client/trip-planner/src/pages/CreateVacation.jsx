import { useEffect, useState } from "react"



const CreateVacation = ({setIsLoggedIn}) => {
  
    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    const [travelLocation, setTravelLocation] = useState("")

    const [budget, setBudget] = useState("")
    const [travelers, setTravelers] = useState("")

    const [questionOne, setQuestionOne] = useState("")
    const [questionTwo, setQuestionTwo] = useState("")
    const [questionThree, setQuestionThree] = useState("")

    const [freeForm, setFreeForm] = useState("")

  
    return (
    <div className="createVacationDiv"></div>
  )
}
export default CreateVacation