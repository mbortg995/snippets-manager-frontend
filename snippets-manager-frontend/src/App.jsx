import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnippetsListPage from '@/pages/snippets/SnippetsListPage.jsx'
import LoginPage from '@/pages/auth/LoginPage.jsx'
import RegisterPage from '@/pages/auth/RegisterPage.jsx'
import CreateSnippet from '@/pages/snippets/CreateSnippet.jsx'
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
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
