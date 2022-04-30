import './styles.scss';
import { useSelector } from 'react-redux';
import Item from '../Item';

function Catalog() {
  const items = useSelector((state) => state.items);

  return (
    <>
      <div className='shop-wrapper'>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Catalog;
