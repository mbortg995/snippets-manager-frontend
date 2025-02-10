import { createContext, useContext } from "react"

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAutenticated = token !== null;

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{
      token,
      isAutenticated,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}