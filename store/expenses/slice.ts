import { createSlice } from '@reduxjs/toolkit';

import { ExpenseItem } from '../../types';

import { fetchExpenses } from './thunk';

type State = {
  data: null | ExpenseItem[];
  loading: boolean;
  error: null | { message?: string };
};

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.loading = false;
      state.error = { message: action.payload };
    });
  },
});

export const expensesSliceReducer = expensesSlice.reducer;