import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { query, where, getDocs } from 'firebase/firestore';
import { tripsRef } from '../../config/firebase';
import { Location } from '../../types';

export const fetchTrips = createAsyncThunk<
  Location[],
  string,
  { rejectValue: string }
>('trips/fetchTrips', async (userId, { rejectWithValue }) => {
  try {
    let data: Location[] = [];

    const params =
      query(tripsRef, where('userId', '==', userId));

    const querySnapshot = await getDocs(params);

    querySnapshot.forEach((doc) => {
      const tripItem = { id: doc.id, ...doc.data() } as Location;

      data.push(tripItem);
    });
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof FirebaseError ? error.message : 'Something went wrong';

    return rejectWithValue(errorMessage);
  }
});