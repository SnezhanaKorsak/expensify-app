import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { TripExpensesScreen } from '../screens/TripExpensesScreen';
import { Location } from '../types';
import { AddTripScreen } from '../screens/AddTripScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddTrip: undefined;
  TripExpenses: { location: Location };
  AddExpense: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddTrip" component={AddTripScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}