import { useEffect, useState } from "react"
import axios from "axios"
import { createClient } from 'pexels';
import { set } from "mongoose";


const Gallery = ({ setIsLoggedIn }) => {

    const [query, setQuery] = useState('')
    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    useEffect(() => {
        getPhotos()
    }, [])

    const [photos, setPhotos] = useState([])


    const getPhotos = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=25`, {
                headers: {
                    Authorization: process.env.REACT_APP_PEXEL_API
                }
            })
            console.log(response);
            setPhotos(response.data.photos)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="mainGallery">
            <div className="galleryDiv">
                <div className="search">
                    <form onSubmit={getPhotos}>
                        <input className="searchInput"
                            type="text"
                            onChange={handleQueryChange}
                            placeholder="Need some inspiration? Give our search a try!"/>
                        <button className="searchButton" type="submit">Search</button>
                    </form>
                </div>
                <div className="photoReel">
                    {photos.map((photo) => (
                        <div className="card" key={photo.id}>
                            <img className="cardImg" src={photo.src.portrait} alt={photo.alt} />
                            <h2>Photographer: <span style={{color: 'orange'}}>{photo.photographer}</span></h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Gallery