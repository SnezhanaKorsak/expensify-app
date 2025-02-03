import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { AddTripScreenNavigationProp, TripExpensesScreenNavigationProp } from '../navigation/types';

import { useAppDispatch, useAppSelector } from '../hooks/use-store';
import { userSelector } from '../store/user/selectors';
import { fetchTrips } from '../store/trips/thunk';
import { Location } from '../types';

import { CardsList } from './CardsList';
import { BlockHeader } from './BlockHeader';

export function RecentTrips() {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const navigation =
    useNavigation<TripExpensesScreenNavigationProp | AddTripScreenNavigationProp>();

  const user = useAppSelector(userSelector);

  const emptyListMessage = 'You haven\'t recorded any trips yet';

  const redirectToAddExpenseScreen = () => navigation.navigate('AddTrip');
  const redirectToTripExpensesScreen = (location: Omit<Location, 'userId'>) =>
    navigation.navigate('TripExpenses', { location });

  useEffect(() => {
    if (user && isFocused) {
      dispatch(fetchTrips(user.uid));
    }
  }, [isFocused]);

  return (
    <View>
      <BlockHeader
        title="Recent Trips"
        buttonTitle="Add Trip"
        buttonHandler={redirectToAddExpenseScreen}
      />

      <CardsList
        emptyListMessage={emptyListMessage}
        redirectHandler={redirectToTripExpensesScreen} />
    </View>
  );
}
