import { useNavigate } from "react-router-dom";
import LogoutIcon from "./icons/LogoutIcon";
import { useAuth } from "@/contexts/AuthContext";


const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <button className="logout-button" onClick={() => {
      logout();
      navigate('/login');
    }}>
      <LogoutIcon />
    </button>
  )
}

export default LogoutButton;