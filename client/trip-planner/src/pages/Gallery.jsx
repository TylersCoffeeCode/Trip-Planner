import { useEffect, useState } from "react"
import axios from "axios"


const Gallery = ({ setIsLoggedIn }) => {
    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    const [photo, setPhoto] = useState('')

    const getPhotos = async () => {
        try {
            let response = await axios.get('')
        } catch {

        }
    }

    return (
        <div className="mainGallery">
            <div className="galleryDiv">
                <div className="photoReel">

                </div>
            </div>
        </div>
    )
}
export default Gallery