import { useEffect, useState } from 'react'
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/layout.css'
import SnippetListItem from '@/components/SnippetListItem.jsx'
import SnippetView from '@/components/SnippetView.jsx'
import CreateEmptyState from '@/components/SnippetEmptyState.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LogoutButton from '@/components/LogoutButton'
import useCategory from '@/hooks/useCategory'


function SnippetsListPage() {
  const navigate = useNavigate();

  const [activeSnippet, setActiveSnippet] = useState(null);

  const [snippets, setSnippets] = useState(null);

  const [languageFilter, setLanguageFilter] = useState("");

  const { categoriesList } = useCategory();

  const handleChange = (event) => {
    setLanguageFilter(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getSnippets = async () => {
      const response = await fetch('https://snippets-manager-ft.onrender.com/api/snippets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/login');
          return;
        }
      }

      const snippetsData = await response.json();
      setSnippets(snippetsData);
    }
    if (!token) {
      navigate('/login');
    } else {
      getSnippets();
    }
  }, [])

  return (
    <div className='app-layout'>
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/images/logo.png" alt="Logo" />
          <Link to="/create" className="create-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </Link>
          <LogoutButton />
        </div>
        <div className="filter-container">
          <select id="language-filter" className="filter-select" value={languageFilter} onChange={handleChange}>
            <option value="" selected>Todos los Lenguajes</option>
            {categoriesList.map(({ key, value }) => {
              return (
                <option key={key} value={key} selected>{value}</option>
              )
            })}
          </select>
        </div>
        <div className="snippets-list" id="snippets-list">
          {snippets && snippets
            .filter((snippet) => !languageFilter || snippet.category === languageFilter)
            .map((snippet) => <SnippetListItem
              snippet={snippet}
              key={snippet._id}
              onClick={setActiveSnippet}
              activeSnippet={activeSnippet} />)}
        </div>
      </aside>

      <main className="main-content">
        <div id="snippet-content">
          {!activeSnippet ? <CreateEmptyState /> : <SnippetView snippet={activeSnippet} />}
        </div>
      </main>

    </div>
  )
}

export default SnippetsListPage;