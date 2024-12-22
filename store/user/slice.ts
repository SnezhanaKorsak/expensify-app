import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';

type State = {
  user: null | User;
  loading: boolean;
};

const initialState: State = {
  user: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  },
});

export const {
  setUser,
  setUserLoading
} = userSlice.actions;

export const userSliceReducer = userSlice.reducer