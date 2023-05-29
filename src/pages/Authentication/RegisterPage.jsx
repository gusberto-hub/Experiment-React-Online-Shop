import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'
import useApiRequest from '../../hooks/useApiRequest'

function RegisterPage() {
  const [user, setUser] = useState({})

  const { sendRequest, data, error, isLoading } = useApiRequest()
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const registerUser = (e) => {
    e.preventDefault()
    sendRequest('post', 'auth/registration/', user)
  }

  useEffect(() => {
    if (data === 'success') {
      navigate('validation')
    }
  }, [data, navigate])

  return (
    <div className="card-container login-wrapper">
      <h2>Register here</h2>
      <p>
        Want to check your cart? <br /> Register your account with your e-mail
        address <br /> and get access to all functionalities{' '}
      </p>
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
            type="submit"
            value={'Send Validation Code'}
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

export default RegisterPage
