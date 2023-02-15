import NavBar from "../components/NavBar"
import { useState, useEffect, Link } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"



const Dashboard = ({ setIsLoggedIn }) => {
  useEffect(() => {
    setIsLoggedIn(true)
  }, [])

  const navigate = useNavigate()
  const { id } = useParams()
  const sessionId = sessionStorage.getItem("userId");

  return (
    <div className="dashboard" style={{}}>
      <div className="dashboardTitle">
        Welcome User! Let's plan your adventure today
      </div>
      <div className="outerDashboardLeft" style={{}}>
        <div className="dashboardLeftTitle">
        </div>
        <div className="dashboardLeftTiles">
          <div className="leftSectionTileMap" onClick={() => navigate('/map')} style={{cursor: 'pointer'}}>
            <div className="mapTile">
            </div>
            <div className="mapInfo">
              All you need is a click to start your journey. <br />
              Give our map a spin!
            </div>
          </div>
          <div className="leftSectionTilePhoto" onClick={() => navigate('/gallery')} style={{cursor: 'pointer'}}>
            <div className="photoTileTitle">
              <h3 style={{ margin: '0' }}>Need some inspiration?</h3>
              <h3 style={{ margin: '0' }}>Take a look at our search gallery</h3>
            </div>
            <div className="photoTileApi">
            </div>
          </div>
        </div>
      </div>
      <div className="outerDashboardRight" >
        <div className="dashboardRightTitle">
        </div>
        <div className="dashboardRightTileMain" onClick={() => navigate(`/planner/${id}`)} style={{cursor: 'pointer'}}>
          <div className="dashboardRightTileText">
          <h2 style={{ margin: '0', color: 'white', width: '100%', height: '1em'}}>Ready to Plan?</h2>
          <h3 style={{ margin: '0', color: 'white' }}>Click here now to get started!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard