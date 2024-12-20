import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../AppNavigation';

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AddExpenseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddExpense'>;
export type TripExpensesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TripExpenses'>;