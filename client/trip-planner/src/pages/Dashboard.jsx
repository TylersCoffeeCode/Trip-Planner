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
          <section className="leftSectionTiles"></section>
          <section className="leftSectionTiles"></section>
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