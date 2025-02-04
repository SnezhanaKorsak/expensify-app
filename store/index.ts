import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './user/slice';
import { tripsSliceReducer } from './trips/slice';
import { expensesSliceReducer } from './expenses/slice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    trips: tripsSliceReducer,
    expenses: expensesSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;