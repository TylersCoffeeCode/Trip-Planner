import { Link } from "react-router-dom"
import logo from '../img/logo.png'

const NavBar = () => {

    let logoImg = logo

    return (
        <div className="navBar">
            <ul>
                <li><Link to={'/'}> <img src={logoImg} style={{width: '2em', height: '2em'}}/> 
                </Link></li>
                <li><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>Your Vacations</Link></li>
                <li><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>Create A Vacation</Link></li>
                <li><Link to={'/'} style={{textDecoration: 'underline', color: 'white'}}>About</Link></li>
            </ul>
        </div>
    )
}
export default NavBar