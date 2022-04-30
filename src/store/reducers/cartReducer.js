let initialState = {
  items: [],
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  const newState = { ...state };
  const calcTotalCart = () =>
    (newState.cartTotal = newState.items.reduce((total, item) => {
      return total + item.total;
    }, 0));

  switch (action.type) {
    case 'ADD_TO_CART':
      const newCartItem = {
        id: action.id,
        title: action.item,
        price: action.price,
        quantity: 1,
      };

      let itemInCart = newState.items.some(
        (item) => item.id === newCartItem.id
      );
      if (!itemInCart || newState.items.length === 0) {
        newCartItem.total = newCartItem.price;
        newState.items = [...newState.items, newCartItem];
      } else {
        newState.items.map((item) => {
          if (item.id === newCartItem.id) {
            item.quantity += 1;
            item.total = item.price * item.quantity;
          }
          return item;
        });
      }
      calcTotalCart();
      return newState;

    case 'DELETE_FROM_CART':
      newState.items = newState.items.filter((item) => item.id !== action.id);
      calcTotalCart();
      return newState;

    case 'INCREMENT_QTY':
      newState.items.map((item) => {
        if (item.id === action.id) {
          item.quantity += 1;
          item.total = item.quantity * item.price;
        }
        return item;
      });
      calcTotalCart();
      return newState;

    case 'DECREMENT_QTY':
      newState.items.map((item) => {
        if (item.id === action.id && item.quantity > 0) {
          item.quantity -= 1;
          item.total = item.quantity * item.price;
        }
        return item;
      });
      calcTotalCart();
      return newState;
    default:
      return newState;
  }
};

export default cartReducer;
