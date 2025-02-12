import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnippetsListPage from '@/pages/snippets/SnippetsListPage.jsx'
import LoginPage from '@/pages/auth/LoginPage.jsx'
import RegisterPage from '@/pages/auth/RegisterPage.jsx'
import CreateSnippet from '@/pages/snippets/CreateSnippet.jsx'
import { AuthProvider } from "./contexts/AuthContext";
import { useTranslation } from 'react-i18next';

function App() {

  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="language-selector">
          <button className={`language-button ${i18n.language === 'es-ES' ? "language-active" : ""}`} onClick={() => {
            i18n.changeLanguage("es-ES");
          }}>ES</button>
          <span>/</span>
          <button className={`language-button ${i18n.language === 'en-US' ? "language-active" : ""}`} onClick={() => {
            i18n.changeLanguage("en-US");
          }}>EN</button>
        </div>
        <Routes>
          <Route path="/" element={<SnippetsListPage />} ></Route>
          <Route path="/login" element={<LoginPage />} ></Route>
          <Route path="/register" element={<RegisterPage />} ></Route>
          <Route path="/create" element={<CreateSnippet />} ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
