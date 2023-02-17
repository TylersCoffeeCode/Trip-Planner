import './App.css';
import './components/LoginPage'
import LoginPage from './components/LoginPage';
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { useEffect, useState } from 'react';
import backgroundImage from './img/background.jpg'
import signUpBackgroundImage from './img/horizon.jpg'
import dashImg from './img/dashboard.jpg'
import NavBar from './components/NavBar';
import Map from './pages/Map';
import Gallery from './pages/Gallery';
import Planner from './pages/Planner';
import CreateVacation from './pages/CreateVacation';
import EditVacation from './pages/EditVacation';



function App() {


  let location = useLocation()

  const [backgroundImg, setBackgroundImg] = useState(backgroundImage)

  useEffect(() => {
    if (location.pathname === '/sign-up') {
      setBackgroundImg(null)
      setBackgroundImg(signUpBackgroundImage)
    } else if (location.pathname === '/') {
      setBackgroundImg(null)
      setBackgroundImg(backgroundImage)
    } else if (location.pathname === '/map') {
      setBackgroundImg(null)
    } else if (location.pathname === '/gallery') {
      setBackgroundImg(null)
    } else if (location.pathname === '/planner') {
      setBackgroundImg(null)
    } else if (location.pathname === '/planner/create') {
      setBackgroundImg(null)
    } else {
      setBackgroundImg(dashImg)
    }
  }, [location.pathname])

  const [isLoggedIn, setIsLoggedIn] = useState(false)




  return (
    <div className='begin' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {isLoggedIn ? <NavBar /> : <></>}
      <main className='main' >
        <Routes>
          <Route path='/' element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/user/dashboard/:id' element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/map' element={<Map setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/gallery' element={<Gallery setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/planner/:id' element={<Planner setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/planner/:id/create' element={<CreateVacation setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/users/vacations/:id' element={<EditVacation setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </main> 
    </div>
  );
}

export default App;
