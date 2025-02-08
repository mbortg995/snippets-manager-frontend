import { useNavigate } from "react-router-dom";
import LogoutIcon from "./icons/LogoutIcon";


const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <button className="logout-button" onClick={() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }}>
      <LogoutIcon />
    </button>
  )
}

export default LogoutButton;