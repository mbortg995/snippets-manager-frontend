import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnippetsListPage from '@/pages/snippets/SnippetsListPage.jsx'
import LoginPage from '@/pages/auth/LoginPage.jsx'
import RegisterPage from '@/pages/auth/RegisterPage.jsx'
import CreateSnippet from '@/pages/snippets/CreateSnippet.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnippetsListPage />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/register" element={<RegisterPage />} ></Route>
        <Route path="/create" element={<CreateSnippet />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
