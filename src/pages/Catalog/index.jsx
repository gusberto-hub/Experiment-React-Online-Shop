import './styles.scss'
import { useSelector } from 'react-redux'
import Item from '../../components/Item/index.jsx'

function Catalog() {
  const items = useSelector((state) => state.items)

  return (
    <>
      <div className="shop-wrapper">
        {items.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default Catalog
