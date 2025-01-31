import { useEffect } from "react";
import { formatCategory } from "../utils/snippets";
import Prism from 'prismjs';
import '../assets/css/prism.css'

const SnippetView = ({ snippet }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [snippet._id]);

  return (
    <div className="snippet-view">
      <div className="snippet-header">
        <h2 className="snippet-title">{snippet.title}</h2>
        <div className="snippet-meta">
          <span className="language-tag">{formatCategory(snippet.category)}</span>
        </div>
      </div>
      <div className="snippet-description-wrapper">
        <p className="snippet-description">{snippet.description}</p>
      </div>
      <div className="code-wrapper">
        <button className="copy-button" data-snippet={encodeURIComponent(snippet.content)}>
          <span className="copy-text">Copiar</span>
        </button>
        <pre><code className={`language-${snippet.category === 'nodejs' ? 'javascript' : snippet.category}`}>{snippet.content}</code></pre>
      </div>
      <div className="snippet-author">
        <img className="snippet-author-img" src={`/images/${snippet.author.toLowerCase()}.png`} alt={snippet.author} />
        <span>{snippet.author}</span>
      </div>
    </div>

  );
}

export default SnippetView;