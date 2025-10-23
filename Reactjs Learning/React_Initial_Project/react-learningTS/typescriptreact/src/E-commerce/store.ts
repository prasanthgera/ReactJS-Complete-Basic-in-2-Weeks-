import { configureStore } from '@reduxjs/toolkit'
import cart from './counterSlice'

export const store = configureStore({
  reducer: {
    updatedValue:cart
  },
})
