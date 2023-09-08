import './index.css'

const BrowserItem = props => {
  const {browsedDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browsedDetails

  const onDeleteBrowseDetail = () => {
    onDelete(id)
  }
  return (
    <li className="list-card">
      <div className="browsedDetails-card">
        <p className="timeAccessed-text">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title-text">{title}</p>
        <p className="domainUrl-text">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDeleteBrowseDetail}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default BrowserItem
