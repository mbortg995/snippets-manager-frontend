import { useEffect } from "react";
import Prism from 'prismjs';
import '../assets/css/prism.css'
import CopyButton from "./CopyButton";
import useCategory from "@/hooks/useCategory";

const SnippetView = ({ snippet }) => {

  const { formatCategory } = useCategory();

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
        <CopyButton text={snippet.content} />
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