import { useEffect, useState } from 'react'
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import '@/assets/css/layout.css'
import SnippetListItem from '@/components/SnippetListItem.jsx'
import SnippetView from '@/components/SnippetView.jsx'
import CreateEmptyState from '@/components/SnippetEmptyState.jsx'

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1ib3J0Zzk5NUBnbWFpbC5jb20iLCJpYXQiOjE3MzgxNDc2NjB9.QlK4022dmyUaGO8R3EKKTS-KXMjZOqyQYkLM3IY3CZs";


function SnippetsListPage() {
  const [activeSnippet, setActiveSnippet] = useState(null);

  const [snippets, setSnippets] = useState(null);

  const [languageFilter, setLanguageFilter] = useState("");

  const handleChange = (event) => {
    setLanguageFilter(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const getSnippets = async () => {
      const response = await fetch('https://snippets-manager-ft.onrender.com/api/snippets', {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = '/login.html';
          return;
        }
        throw new Error('Error fetching snippets');
      }

      const snippetsData = await response.json();
      setSnippets(snippetsData);
    }
    getSnippets();
  }, [])

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/images/logo.png" alt="Logo" />
          <a href="/create.html" className="create-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </a>
        </div>
        <div className="filter-container">
          <select id="language-filter" className="filter-select" value={languageFilter} onChange={handleChange}>
            <option value="" selected>Todos los Lenguajes</option>
            <option value="nodejs">Node.js</option>
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="express">Express</option>
            <option value="npm">NPM</option>
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

    </>
  )
}

export default SnippetsListPage;