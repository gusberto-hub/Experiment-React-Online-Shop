import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './index.scss';

function Header() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const logout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    navigate('/');
  };

  const login = () => {
    navigate('login');
  };

  return (
    <>
      <header>
        <Link to='/'>
          {' '}
          <h1>Crazy Shirt Shop</h1>
        </Link>
        <div className='nav-container'>
          <div className='nav-login'>
            {user.token ? (
              <>
                <button onClick={logout}>logout</button>
                <p>logged in as {user.name}</p>
              </>
            ) : (
              <>
                <button onClick={login}>login</button>
              </>
            )}
          </div>
          <Link className={location === '/' ? 'active' : null} to='/'>
            Shop
          </Link>
          <Link className={location === '/cart' ? 'active' : null} to='cart'>
            <p>
              Cart ({cart.items.length})
              {cart.cartTotal > 0 && (
                <span>{cart.cartTotal.toFixed(2) + ' CHF'}</span>
              )}
            </p>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
