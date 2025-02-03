import type { RootState } from '..';

export const tripsSelector = (state: RootState) => state.trips.data;

export const tripsProcessSelector = (state: RootState) => {
  return {
    loading: state.trips.loading,
    error: state.trips.error,
  };
};