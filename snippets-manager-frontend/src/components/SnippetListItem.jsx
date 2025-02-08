import useCategory from "@/hooks/useCategory";

const SnippetListItem = ({ snippet, onClick, activeSnippet }) => {
  const { formatCategory } = useCategory();
  const active = activeSnippet && activeSnippet._id === snippet._id;
  return (
    <div className={`snippet-item ${active ? 'active' : ''}`}
      tabIndex="0"
      role="button"
      onClick={() => {
        onClick(snippet);
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