import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { query, where, getDocs } from 'firebase/firestore';
import { expensesRef } from '../../config/firebase';
import { ExpenseItem } from '../../types';

export const fetchExpenses = createAsyncThunk<
  ExpenseItem[],
  string,
  { rejectValue: string }
>('expenses/fetchExpenses', async (tripId, { rejectWithValue }) => {
  try {
    let data: ExpenseItem[] = [];

    const params =
      query(expensesRef, where('tripId', '==', tripId));

    const querySnapshot = await getDocs(params);

    querySnapshot.forEach((doc) => {
      const expenseItem = { id: doc.id, ...doc.data() } as ExpenseItem;

      data.push(expenseItem);
    });
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof FirebaseError ? error.message : 'Something went wrong';

    return rejectWithValue(errorMessage);
  }
});