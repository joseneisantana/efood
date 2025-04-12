import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Formato: { id, name, price, quantity }
    total: 0
  },
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (itemExists) {
        itemExists.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        state.total = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      }
    }
  }
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
