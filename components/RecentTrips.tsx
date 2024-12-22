import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TripExpensesScreenNavigationProp } from '../navigation/types';

import { CardsList } from './CardsList';
import { BlockHeader } from './BlockHeader';
import { Location } from '../types';

export function RecentTrips() {
  const navigation =
    useNavigation<TripExpensesScreenNavigationProp>();

  const emptyListMessage = 'You haven\'t recorded any trips yet';

  const redirectToAddExpenseScreen = () => navigation.navigate('AddTrip');
  const redirectToTripExpensesScreen = (location: Location) => navigation.navigate('TripExpenses', { location });

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
