import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/reset.css'
import './assets/css/variables.css'
import './assets/css/styles.css'
import './assets/css/layout.css'
import snippets from './database.js'
import SnippetListItem from './components/SnippetListItem.jsx'
import SnippetView from './components/SnippetView.jsx'
import CreateEmptyState from './components/SnippetEmptyState.jsx'


function App() {
  const [activeSnippet, setActiveSnippet] = useState(null);

  return (
    <>
      <div className="app-layout">
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
            <select id="language-filter" className="filter-select">
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
            {snippets.map((snippet) => <SnippetListItem snippet={snippet} key={snippet._id} onClick={setActiveSnippet} />)}

          </div>
        </aside>

        <main className="main-content">
          <div id="snippet-content">
            {!activeSnippet ? <CreateEmptyState /> : <SnippetView snippet={activeSnippet} />}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
