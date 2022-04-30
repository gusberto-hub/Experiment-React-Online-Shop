import { combineReducers, createStore } from 'redux';
import itemsReducer from './reducers/itemsReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    user: userReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
