import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementItemQuantity,
  deleteCartItem,
  incrementItemQuantity,
} from '../../store/slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items: cartItems, cartTotal } = useSelector((state) => state.cart)

  const delete_item = (id) => {
    dispatch(deleteCartItem(id))
  }
  const increment_qty = (id) => {
    dispatch(incrementItemQuantity(id))
  }
  const decrement_qty = (id) => {
    dispatch(decrementItemQuantity(id))
  }

  return (
    <div className="card-container cart-wrapper">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-list">
        {cartItems.length !== 0 ? (
          <>
            <ul>
              {cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                      className="btn-primary"
                      onClick={() => delete_item(item.id)}
                    >
                      x
                    </button>
                    <p>{item.title}</p>
                    <div className="item-quantity">
                      <button
                        className="btn-primary"
                        onClick={() => decrement_qty(item.id)}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="btn-primary"
                        onClick={() => increment_qty(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-price">
                      {item.price.toFixed(2) + ' CHF'}
                    </p>
                    <p className="item-price">
                      {item.total.toFixed(2) + ' CHF'}
                    </p>
                  </li>
                )
              })}
            </ul>
            <h2 className="cart-total">
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
  )
}

export default Cart
