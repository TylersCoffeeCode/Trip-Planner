import logo from './logo.svg';
import './App.css';
import './components/LoginPage'
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/sign-up' element={<SignUpPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
