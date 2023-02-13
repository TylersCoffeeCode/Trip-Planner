import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"

const Dashboard = ({ setIsLoggedIn }) => {
  useEffect(() => {
    setIsLoggedIn(true)

  }, [])

  return (
    <div className="dashboard" style={{}}>
      <div className="dashboardTitle">
        <h1>Welcome User! Let's plan your adventure today</h1>
      </div>
      <div className="outerDashboardLeft" style={{}}>
        <div className="dashboardLeftTitle">
          left side
        </div>
        <div className="dashboardLeftTiles">
          <div className="leftSectionTileMap">
            <div className="mapTile">
              Map
            </div>
            <div className="mapInfo">
              info
            </div>
          </div>
          <div className="leftSectionTilePhoto">
            <div className="photoTileTitle">
              <h3 style={{margin: 0}}>Need some inspiration?</h3>
              <h3 style={{margin: 0}}>Take a look at our gallery</h3>
            </div>
            <div className="photoTileApi">

            </div>
          </div>
        </div>
      </div>
      <div className="outerDashboardRight">
        <div className="dashboardRightTitle">
          right side
        </div>
      </div>


    </div>
  )
}
export default Dashboard