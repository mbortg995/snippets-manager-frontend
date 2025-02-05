import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <p>Estoy en el Login!</p>
      <Link to="/register">¿No tienes cuenta? Accede aquí al registro.</Link>
    </>
  )
}

export default LoginPage;