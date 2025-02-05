import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <p>Estoy en el Register!</p>
      <Link to="/login">¿Ya tienes cuenta? Accede aquí al login.</Link>
    </>
  )
}

export default RegisterPage;