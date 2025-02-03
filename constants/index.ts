import { ExpenseItem } from '../types';

export const expenseItems: ExpenseItem[] = [
  {
    id: '1',
    title: 'ate a sandwich',
    amount: 4,
    category: 'food'
  },
  {
    id: '2',
    title: 'bought a dress',
    amount: 50,
    category: 'shopping'
  },
  {
    id: '3',
    title: 'watched a movie',
    amount: 10,
    category: 'entertainment'
  },
  {
    id: '4',
    title: 'bought a back ticket',
    amount: 35,
    category: 'other'
  },
];

export const categories = ['food', 'commute', 'shopping', 'entertainment', 'other'];