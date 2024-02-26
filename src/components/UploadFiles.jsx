import React, { useState } from 'react';
import NavBar from './NavBar';
import { useAuth } from './AuthContext'; 

const UploadFiles = () => {
  const { user } = useAuth(); 
  const [storedUser, setStoredUser] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [numLines, setNumLines] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setNumLines(0); 
  };

  const countLines = () => {
    //aqui sera implementada a logica para contar as linhas do arquivo, verificar se essa contagem sera mesma feita no front ou backend
  };

  const handleUpload = () => {
    if (file) {
      countLines(); 
    } else {
      alert('Por favor, selecione um arquivo para fazer upload.');
    }
  };

  return (
    <div>
      <NavBar />
      <p>{user || storedUser ? `Bem-vindo(a), ${user ? user.username : storedUser.username}` : 'Faça login para continuar'}</p>
      
      <input type="file" onChange={handleFileChange} />

      {fileName && (
        <div>
          <p>Arquivo: {fileName}</p>
          <p>Número de linhas: {numLines}</p>
        </div>
      )}

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFiles;
