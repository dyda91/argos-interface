import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import LoginPage from './components/LoginPage';
import UploadFiles from './components/UploadFiles';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/upload_files" element={<UploadFiles />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
