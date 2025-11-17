import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './Slices/CounterSlice'

export const store = configureStore({ // This creates a Global store
  reducer: {
    counter:CounterSlice.reducer   // Counter likhs kyuki yhi naam hmne slice mien dia hai
  },
})



