import { useState } from "react";
import { formatCategory } from "../utils/snippets";

const SnippetListItem = ({ snippet, onClick }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`snippet-item ${active ? 'active' : ''}`}
      tabIndex="0"
      role="button"
      onClick={() => {
        onClick(snippet);
        setActive(true);
      }}>
      <div className="snippet-item-title-wrapper">
        <img className="snippet-item-author-img" src={`/images/${snippet.author.toLowerCase()}.png`} alt={snippet.author} />
        <p className="snippet-item-title">{snippet.title}</p>
      </div>
      <div className="snippet-item-meta">
        <span className="snippet-item-language">{formatCategory(snippet.category)}</span>
      </div>
    </div>
  )
}

export default SnippetListItem;