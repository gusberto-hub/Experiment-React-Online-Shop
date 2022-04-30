let initialState = { name: '', token: undefined };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const user = {
        name: action.user.user.username,
        token: action.user.access,
      };
      return user;
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
