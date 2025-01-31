import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged, User } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '../hooks/use-store';
import { userSelector } from '../store/user/selectors';

import { auth } from '../config/firebase';
import { Location } from '../types';

import { HomeScreen } from '../screens/HomeScreen';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { TripExpensesScreen } from '../screens/TripExpensesScreen';
import { AddTripScreen } from '../screens/AddTripScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { setUser } from '../store/user/slice';

export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  AddTrip: undefined;
  TripExpenses: { location: Location };
  AddExpense: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  onAuthStateChanged(auth, authUser => {
    dispatch(setUser({ user: authUser }));
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddTrip" component={AddTripScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TripExpenses" component={TripExpensesScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}