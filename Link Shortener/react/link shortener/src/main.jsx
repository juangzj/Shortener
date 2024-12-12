import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/navbar/navbar.jsx';
import Login from './pages/login/Login.jsx'; //Import of the login page
import Register from './pages/register/register.jsx'; // Import of the register page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
