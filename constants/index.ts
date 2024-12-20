import { ExpenseItem, Location } from '../types';

export const items: Location[] = [
  {
    id: '1',
    place: 'Minsk',
    country: 'Belarus',
  },
  {
    id: '2',
    place: 'Vitebsk',
    country: 'Belarus',
  },
  {
    id: '3',
    place: 'Moscow',
    country: 'Russia',
  },
  {
    id: '4',
    place: 'Saint Petersburg',
    country: 'Russia',
  },

]

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
]