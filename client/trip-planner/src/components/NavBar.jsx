import { Link } from "react-router-dom"
import logo from '../img/logo.png'

const NavBar = () => {

    let logoImg = logo

  const sessionId = sessionStorage.getItem("userId");


    return (
        <div className="navBar">
            <ul>
                <li className="navLi"><Link to={`/user/dashboard/${sessionId}`} style={{color: 'white'}}>HOME</Link></li>
                <li className="navLi"><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>YOUR VACATIONS</Link></li>
                <li className="navLi"><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>CREATE VACATION</Link></li>
                <li className="navLi"><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>ABOUT</Link></li>
            </ul>
        </div>
    )
}
export default NavBar