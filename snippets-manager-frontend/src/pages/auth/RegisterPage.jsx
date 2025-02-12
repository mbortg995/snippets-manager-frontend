import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/auth.css'
import { useAuth } from "@/contexts/AuthContext";

const RegisterPage = () => {

  const { register, error } = useAuth();

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const result = await register(data);
    if (result) {
      navigate('/');
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