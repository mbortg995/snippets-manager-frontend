import { Link } from "react-router-dom";
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/auth.css'

const LoginPage = () => {
  return (
    <div className="auth-layout">
      <div className="auth-image">
        <div className="auth-image-overlay"></div>
        <h2 className="auth-tagline">Guarda tus snippets.Comparte tu código.</h2>
      </div>

      <div className="auth-content">
        <div className="auth-header">
          <img src="/images/logo.png" alt="Logo" className="auth-logo" />
          <h1 className="auth-title">Iniciar sesión</h1>
          <p className="auth-subtitle">
            No tienes una cuenta? <a href="/register.html">Registrate</a>
          </p>
        </div>

        <form className="auth-form">
          <div className="auth-alert" id="error-message"></div>
          <div className="auth-form-group">
            <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
          </div>
          <div className="auth-form-group">
            <input type="password" id="password" name="password" placeholder="Contraseña" required />
          </div>

          <button type="submit" className="auth-button">Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;