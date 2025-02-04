import { User as FirebaseUser } from 'firebase/auth';

export type ExpenseItem = {
  id: string,
  title: string,
  amount: number,
  category: string,
  tripId: string;
}

export type Location = {
  id: string;
  place: string;
  country: string;
  userId: string;
}


export type User = FirebaseUser;
