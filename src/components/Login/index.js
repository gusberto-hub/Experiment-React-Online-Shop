import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.scss';

function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: undefined,
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post('https://motion.propulsion-home.ch/backend/api/auth/token/', user)
      .then((res) => dispatch({ type: 'LOGIN_USER', user: res.data }))
      .then(() => navigate(-1))
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <div className='card-container login-wrapper'>
      <form onSubmit={loginUser}>
        <div className='input-container'>
          <input
            type='text'
            id='email'
            placeholder={error.email || 'E-Mail'}
            onChange={inputHandler}
          />
        </div>

        <div className='input-container'>
          <input
            id='password'
            placeholder={error.password || 'Password'}
            type='password'
            onChange={inputHandler}
          />
        </div>
        <div className='input-container'>
          <input type='submit' value={'Log In'} onClick={loginUser} />
          <p>{error.detail}</p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
