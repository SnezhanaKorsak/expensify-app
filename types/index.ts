import { User as FirebaseUser } from 'firebase/auth';

export type ExpenseItem = {
  id: string,
  title: string,
  amount: number,
  category: string,
}

export type Location = {
  id: string;
  place: string;
  country: string;
}


export type User = FirebaseUser;
