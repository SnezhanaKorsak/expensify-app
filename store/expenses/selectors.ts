import type { RootState } from '..';

export const expensesSelector = (state: RootState) => state.expenses.data;

export const expensesProcessSelector = (state: RootState) => {
  return {
    loading: state.expenses.loading,
    error: state.expenses.error,
  };
};