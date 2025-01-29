const SnippetListItem = ({ snippet }) => {
  return (
    <div className="snippet-item {isActive ? 'active' : ''}"
      data-id="{snippet._id}"
      tabIndex="0"
      role="button">
      <div className="snippet-item-title-wrapper">
        <img className="snippet-item-author-img" src={`./public/images/${snippet.author.toLowerCase()}.png`} alt={snippet.author} />
        <p className="snippet-item-title">{snippet.title}</p>
      </div>
      <div className="snippet-item-meta">
        <span className="snippet-item-language">{snippet.category}</span>
      </div>
    </div>
  )
}

export default SnippetListItem;