import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', access_token: undefined },
  reducers: {
    login_user: (state, action) => {
      state.name = action.payload.user.username
      state.access_token = action.payload.access
    },
    logout_user: (state) => {
      state.name = ''
      state.access_token = null
    },
  },
})

export const { login_user, logout_user } = userSlice.actions
export default userSlice.reducer
