import { useEffect } from "react"

const Map = ({ setIsLoggedIn }) => {

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])



    return (


        <div className="mapMainDiv">
            <div className="mapTitle">
                <h1>Oh the places you'll go!</h1>
                <h5>
                    Traveling is an incredibly exciting and enjoyable experience. Exploring new places, trying new foods, and immersing oneself in different cultures can be both enriching and rejuvenating.
                    The excitement of planning a trip, the thrill of embarking on a new adventure, and the memories made along the way make traveling one of the most fulfilling activities one can do.
                    Whether it's a solo trip or a group vacation, Horizon traveling offers the opportunity to escape the monotony of everyday life and create unforgettable memories.
                </h5>
            </div>
            <div className="outerMapContainer">
            <div className="outerMap">
            </div>
            </div>
        </div>
    )
}
export default Map