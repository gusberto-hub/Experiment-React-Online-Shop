import { useDispatch } from 'react-redux';
import './styles.scss';

function Item(props) {
  const dispatch = useDispatch();
  const item = props;
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: props.title,
      id: props.id,
      price: props.price,
    });
  };

  return (
    <>
      <div className='item-wrapper card-container'>
        <div className='item-image'>
          <img src={item.image} alt={item.title}></img>
        </div>
        <div className='item-footer'>
          <h2>{item.title}</h2>
          <div className='item-details'>
            <p>{item.price.toFixed(2) + ' CHF'}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
