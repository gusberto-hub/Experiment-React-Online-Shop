import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles.scss'
import { login_user } from '../../store/slices/userSlice'
import useApiRequest from '../../hooks/useApiRequest'

function LoginPage() {
  const [user, setUser] = useState({})

  const { sendRequest, data, error, isLoading } = useApiRequest()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const loginUser = (e) => {
    e.preventDefault()
    sendRequest('post', 'auth/token/', user)
  }

  useEffect(() => {
    if (data) {
      const accessToken = data.access
      const username = data.user.username
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('username', username)
      dispatch(login_user(data))
      const from = location.state?.from.pathname || '/'
      navigate(from)
    }
  }, [data, dispatch, navigate, location])

  return (
    <div className="card-container login-wrapper">
      <h2>Log In</h2>
      <form onSubmit={loginUser}>
        <div className="input-container">
          <input
            type="text"
            id="email"
            placeholder={'E-Mail'}
            onChange={inputHandler}
          />
          {error?.email && <p className="error-message">{error.email}</p>}
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
          <input type="submit" value={'Log In'} onClick={loginUser} />
          <p className="error-message">{error?.detail}</p>
          {isLoading && <p>request is being processing</p>}
        </div>
        <div className="input-container">
          <p>don&apos;t have an account?</p>
          <Link to={'/register'}>
            <button className="btn-secondary">Register</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
