import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import LandingPages from './pages/LandingPages';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPages />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
