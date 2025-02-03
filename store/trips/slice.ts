import { createSlice } from '@reduxjs/toolkit';

import { Location } from '../../types';

import { fetchTrips } from './thunk';

type State = {
  data: null | Location[];
  loading: boolean;
  error: null | { message?: string };
};

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTrips.rejected, (state, action) => {
      state.loading = false;
      state.error = { message: action.payload };
    });
  },
});

export const tripsSliceReducer = tripsSlice.reducer;