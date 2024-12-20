import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { TripExpensesScreen } from '../screens/TripExpensesScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddExpense: undefined;
  TripExpenses: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}