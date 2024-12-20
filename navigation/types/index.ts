import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../AppNavigation';

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AddExpenseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddExpense'>;
export type AddTripScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTrip'>;
export type TripExpensesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TripExpenses'>;

export type TripExpensesScreenRouteProp = RouteProp<RootStackParamList, 'TripExpenses'>;