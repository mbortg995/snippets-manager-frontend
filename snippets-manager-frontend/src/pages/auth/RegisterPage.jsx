import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/auth.css'

const RegisterPage = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://snippets-manager-ft.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setError(error.error);
      }

      const { user, token } = await response.json();

      localStorage.setItem('user', JSON.stringify({
        id: user.id,
        email: user.email,
        username: user.username,
      }));

      localStorage.setItem('token', token);

      navigate('/');
    } catch {
      setError("Servicio no disponible. Inténtelo de nuevo más adelante.");
    }

  }



  return (
    <div className="auth-layout">
      <div className="auth-image">
        <div className="auth-image-overlay"></div>
        <h2 className="auth-tagline">Guarda tus snippets.Comparte tu código.</h2>
      </div>

      <div className="auth-content">
        <div className="auth-header">
          <img src="/images/logo.png" alt="Logo" className="auth-logo" />
          <h1 className="auth-title">Crear cuenta</h1>
          <p className="auth-subtitle">
            Ya tienes una cuenta? <a href="/login.html">Inicia sesión</a>
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmitForm}
        >
          {error ? <div className="auth-alert" id="error-message">{error}</div> : null}
          <div className="auth-form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario"
              value={data.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={data.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={data.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="auth-button">Crear cuenta</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;