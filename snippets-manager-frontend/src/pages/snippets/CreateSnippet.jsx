import useCategory from "@/hooks/useCategory";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const CreateSnippet = () => {

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { categoriesList } = useCategory();

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    author: ""
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }
  const [error, setError] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      const response = await fetch('https://snippets-manager-ft.onrender.com/api/snippets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setError(error.error);
        return;
      }

      navigate('/');
    } catch {
      setError("Servicio no disponible. Inténtelo de nuevo más adelante.");
    }
  }

  return (
    <div className="create-layout">
      <header className="create-header">
        <div className="header-content">
          <img src="/images/logo.png" alt="Logo" />
          <Link to="/" className="back-link">← Volver a la Lista</Link>
        </div>
      </header>

      <main className="create-content">
        <form
          className="create-form"
          onSubmit={handleSubmitForm}
        >
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Lenguaje</label>
            <select
              id="language"
              name="category"
              value={data.category}
              onChange={handleInputChange}
              required
            >
              <option value="" selected>Todos los Lenguajes</option>
              {categoriesList.map(({ key, value }) => {
                return (
                  <option key={key} value={key} selected>{value}</option>
                )
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="code">Código</label>
            <textarea
              id="code"
              name="content"
              value={data.content}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="author">Autor</label>
            <select
              id="author"
              name="author"
              value={data.author}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona un autor</option>
              <option value="Miguel">Miguel</option>
              <option value="Cristian">Cristian</option>
              <option value="Larry">Larry</option>
              <option value="Pepe">Pepe</option>
              <option value="Jona">Jona</option>
            </select>
          </div>
          {error ? <div className="auth-alert" id="error-message">{error}</div> : null}
          <div className="form-actions">
            <button type="submit" className="submit-button">Crear Snippet</button>
            <Link to="/" className="cancel-button">Cancelar</Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateSnippet;