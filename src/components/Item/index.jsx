import { useDispatch } from 'react-redux'
import './styles.scss'
import { addItemCart } from '../../store/slices/cartSlice'

function Item({ item }) {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(
      addItemCart({
        title: item.title,
        id: item.id,
        price: item.price,
      })
    )
  }

  return (
    <>
      <div className="item-wrapper card-container">
        <div className="item-image">
          <img src={item.image} alt={item.title}></img>
        </div>
        <div className="item-footer">
          <h2>{item.title}</h2>
          <div className="item-details">
            <p>{item.price.toFixed(2) + ' CHF'}</p>
            <button className="btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
