import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSlices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})