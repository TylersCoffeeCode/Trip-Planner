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
import NavBar from './components/NavBar';

function App() {
  let location = useLocation()

  const [backgroundImg, setBackgroundImg] = useState(backgroundImage)

  useEffect(() => {
    if (location.pathname === '/sign-up') {
      setBackgroundImg(signUpBackgroundImage)
    } else if (location.pathname === '/'){
      setBackgroundImg(backgroundImage)
    } else {
      setBackgroundImg(null)
    }
  }, [location.pathname])

  const [isLoggedIn, setIsLoggedIn] = useState(false)




  return (
    <div className='begin' style={{ backgroundImage: `url(${backgroundImg})` }}>
           {isLoggedIn? <NavBar /> : <></>}
      <main className='main' >
        <Routes>
          <Route path='/' element={<SignInPage setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/user/dashboard/:id' element={<Dashboard setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
