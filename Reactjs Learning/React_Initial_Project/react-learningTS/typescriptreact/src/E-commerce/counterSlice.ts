import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
export const counterSlice = createSlice({
  name: 'updatedValue',
  initialState:{
    value:0
  },
  reducers: {
    setTotalCount(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
})

export const { setTotalCount } = counterSlice.actions

export default counterSlice.reducer