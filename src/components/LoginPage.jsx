import React, { useState } from 'react';
import logo from '../assets/Logo.png'; 
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const LoginPage = () => { 
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const users = [
      { username: 'automni', password: 'axs' },
      { username: 'edjalma', password: 'axs' },
    ];

    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      login(foundUser); 
      navigate('/upload_files'); 
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="login-form">
        <div className="input-container">
          <label htmlFor="username">Usuário:</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Digite seu usuário"
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Digite sua senha"
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
