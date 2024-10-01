import React, { useState, useEffect, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export const Login = () => {
  const { login} =  useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres.');
    } else {
      try {
        await login(email, password);
        setMessage('Inicio de sesión exitoso!');
        navigate('/'); 
      } catch (err) {
        if (err.message === 'Usuario no registrado' || err.response?.status === 404) {

          setMessage('Usuario no registrado. Por favor, regístrese.');
        } else if (err.response?.status === 401) {

          setMessage('Credenciales incorrectas. Intente nuevamente.');
        } else {
          setMessage(err.message || 'Error al iniciar sesión');
        }
      }
    }
  };

  return (
    <div className="container mt-4">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    {message && <div className="alert mt-3">{message}</div>}
  </div>
  );
};

export default Login;