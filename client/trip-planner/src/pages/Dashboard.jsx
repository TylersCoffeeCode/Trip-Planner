import NavBar from "../components/NavBar"
import { useState,useEffect } from "react"

const Dashboard = ({setIsLoggedIn}) => {
  useEffect(() => {
    setIsLoggedIn(true)

  }, [])
  
    return (
    <div className="dashboard" style={{width: '90vw', height: '85vh'}}>
      <h1>hello</h1>
        <div className="outerDashboard" style={{backgroundColor: 'orange', width: '40%', height: '80%'}}>
          nice
        </div>
    </div>
  )
}
export default Dashboard