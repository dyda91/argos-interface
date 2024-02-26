import React from 'react';
import logo from '../assets/Logo.png';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('user');
      navigate('/');
    };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar__spacer"></div>

        <div className="navbar__logout">
          <button onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
