import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/auth.css'
import { useAuth } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t, i18n } = useTranslation();

  const { login, error } = useAuth();

  const navigate = useNavigate();

  const [data, setData] = useState({
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
    const result = await login(data);
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
          <h1 className="auth-title">{t("login_button")}</h1>
          <p className="auth-subtitle">
            No tienes una cuenta? <a href="/register.html">Registrate</a>
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmitForm}
        >
          {error ? <div className="auth-alert" id="error-message">{error}</div> : null}
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

          <button type="submit" className="auth-button">{t("login_button")}</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;