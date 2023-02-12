import './App.css';
import './components/LoginPage'
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
      <main className='main'>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/user/dashboard/:id' element={<Dashboard />} />
          <Route path='/sign-up' element={<SignUpPage />}/>
        </Routes>
      </main>
  );
}

export default App;
