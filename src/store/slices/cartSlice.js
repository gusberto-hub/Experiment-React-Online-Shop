import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  cartTotalItems: 0,
  cartTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const item = action.payload

      // let's first check if the item is already in the cart by looking for its id
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      )

      // if not found then add it to the cart
      if (existingItemIndex === -1) {
        const newCartItem = {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          total: item.price,
        }
        state.items.push(newCartItem)
      }
      // if the item is already in the cart then only update its quantity
      else {
        const existingCartItem = state.items[existingItemIndex]
        existingCartItem.quantity += 1
        existingCartItem.total =
          existingCartItem.quantity * existingCartItem.price
      }

      const { cartTotal, cartTotalItems } = calculateCartSummary(state.items)
      state.cartTotal = cartTotal
      state.cartTotalItems = cartTotalItems
    },
    deleteCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      const { cartTotal, cartTotalItems } = calculateCartSummary(state.items)
      state.cartTotal = cartTotal
      state.cartTotalItems = cartTotalItems
    },
    incrementItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) {
        item.quantity += 1
        item.total = item.quantity * item.price
        const { cartTotal, cartTotalItems } = calculateCartSummary(state.items)
        state.cartTotal = cartTotal
        state.cartTotalItems = cartTotalItems
      }
    },
    decrementItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) {
        item.quantity > 0 ? (item.quantity -= 1) : (item.quantity = 0)
        item.total = item.quantity * item.price
        const { cartTotal, cartTotalItems } = calculateCartSummary(state.items)
        state.cartTotal = cartTotal
        state.cartTotalItems = cartTotalItems
      }
    },
    resetCart: () => initialState,
  },
})

const calculateCartSummary = (items) => {
  let cartTotal = 0
  let cartTotalItems = 0

  items.forEach((item) => {
    cartTotal += item.total
    cartTotalItems += item.quantity
  })

  return {
    cartTotal,
    cartTotalItems,
  }
}

export const {
  addItemCart,
  deleteCartItem,
  incrementItemQuantity,
  decrementItemQuantity,
  resetCart,
} = cartSlice.actions

export default cartSlice.reducer
