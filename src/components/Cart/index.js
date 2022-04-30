import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const delete_item = (id) => {
    dispatch({
      type: 'DELETE_FROM_CART',
      id,
    });
  };
  const increment_qty = (id) => {
    dispatch({ type: 'INCREMENT_QTY', id });
  };
  const decrement_qty = (id) => {
    dispatch({ type: 'DECREMENT_QTY', id });
  };

  return (
    <div className='card-container cart-wrapper'>
      <h1 className='cart-title'>Cart</h1>
      <div className='cart-list'>
        {cartItems.length !== 0 ? (
          <>
            <ul>
              {cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    <button onClick={() => delete_item(item.id)}>x</button>
                    <p>{item.title}</p>
                    <div className='item-quantity'>
                      <button onClick={() => decrement_qty(item.id)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increment_qty(item.id)}>+</button>
                    </div>
                    <p className='item-price'>
                      {item.price.toFixed(2) + ' CHF'}
                    </p>
                    <p className='item-price'>
                      {item.total.toFixed(2) + ' CHF'}
                    </p>
                  </li>
                );
              })}
            </ul>
            <h2 className='cart-total'>
              Total {cartTotal.toFixed(2) + ' CHF'}
            </h2>
          </>
        ) : (
          <p>
            <strong>Your cart is empty</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
