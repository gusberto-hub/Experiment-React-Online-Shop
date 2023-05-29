import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="card-container login-wrapper">
      <h1>Page not found</h1>
      <Link to="/">
        <button className="btn-secondary">back to the shop</button>
      </Link>
    </div>
  )
}

export default NotFound
