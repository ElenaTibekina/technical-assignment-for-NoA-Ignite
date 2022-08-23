import { createSlice } from '@reduxjs/toolkit';
import { Repositories } from '../components/utils/Repositories';

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      if (state.counter >= 0 && state.counter <= Repositories.length - 1) {
        state.counter++
      }
    },
    decrement(state) {
      if (state.counter >= 1) {
        state.counter--
      }
    },
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;