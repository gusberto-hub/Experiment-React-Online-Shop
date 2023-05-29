import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'
import useApiRequest from '../../hooks/useApiRequest'

function ValidationPage() {
  const [user, setUser] = useState({})

  const { sendRequest, data, error, isLoading } = useApiRequest()
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const registerUser = (e) => {
    e.preventDefault()
    sendRequest('patch', 'auth/registration/validation/', user)
  }

  useEffect(() => {
    if (data === 'success') {
      navigate('/login')
    }
  }, [data, navigate])

  return (
    <div className="card-container login-wrapper">
      <h2>Create Your Account</h2>
      <p>Please enter your credentials and your validation code</p>
      <form onSubmit={registerUser}>
        <div className="input-container">
          <input
            type="text"
            id="email"
            placeholder="E-Mail"
            onChange={inputHandler}
          />
          {error?.email && <p className="error-message">{error.email}</p>}
        </div>
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={inputHandler}
          />
          {error?.username && <p className="error-message">{error.username}</p>}
        </div>

        <div className="input-container">
          <input
            id="first_name"
            placeholder={'First Name'}
            type="text"
            onChange={inputHandler}
          />
          {error?.first_name && (
            <p className="error-message">{error.first_name}</p>
          )}
        </div>

        <div className="input-container">
          <input
            id="last_name"
            placeholder={'Last Name'}
            type="text"
            onChange={inputHandler}
          />
          {error?.last_name && (
            <p className="error-message">{error.last_name}</p>
          )}
        </div>

        <div className="input-container">
          <input
            id="password"
            placeholder={'Password'}
            type="password"
            onChange={inputHandler}
          />
          {error?.password && <p className="error-message">{error.password}</p>}
        </div>

        <div className="input-container">
          <input
            id="password_repeat"
            placeholder={'Repeat Password'}
            type="password"
            onChange={inputHandler}
          />
          {error?.password_repeat && (
            <p className="error-message">{error.password_repeat}</p>
          )}
        </div>

        <div className="input-container">
          <input
            id="code"
            placeholder={'Validation Code'}
            type="text"
            onChange={inputHandler}
          />
          {error?.code && <p className="error-message">{error.code}</p>}
        </div>

        <div className="input-container">
          <input
            type="submit"
            value={'Create Account'}
            onClick={registerUser}
          />
          <p className="error-message">{error?.detail}</p>
          {isLoading && <p>request is being processing</p>}
        </div>
        <div className="input-container">
          <p>already have an account?</p>
          <Link to={'/login'}>
            <button className="btn-secondary">Login</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ValidationPage
