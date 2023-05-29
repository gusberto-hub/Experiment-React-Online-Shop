import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './slices/itemsSlice'
import cartSlice from './slices/cartSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    items: itemsSlice,
    cart: cartSlice,
  },
})

export default store
