import { useEffect } from "react"

const Map = ({setIsLoggedIn}) => {
    
    useEffect(() => {
        setIsLoggedIn(true)
      }, [])
  
  
  
    return (

    
    <div className="mapMainDiv">
        <div className="outerMap">
            
        </div>
    </div>
  )
}
export default Map