import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './styles.scss'
import { logout_user } from '../../store/slices/userSlice'
import { resetCart } from '../../store/slices/cartSlice'

function Header() {
  const { user, cart } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout_user())
    dispatch(resetCart())
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1>Crazy Shirt Shop</h1>
        </Link>
        <div className="nav-container">
          <div className="nav-login">
            {user.access_token ? (
              <>
                <button className="btn-primary" onClick={handleLogout}>
                  logout
                </button>
                <p>logged in as {user.name}</p>
              </>
            ) : (
              <Link to={'/login'} className="btn-primary">
                Login
              </Link>
            )}
          </div>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="cart">
            Cart ({cart.cartTotalItems})
            {cart.cartTotal > 0 && (
              <span>{cart.cartTotal.toFixed(2) + ' CHF'}</span>
            )}
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default Header
