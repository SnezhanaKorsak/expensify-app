import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddExpenseScreenNavigationProp, TripExpensesScreenNavigationProp } from '../navigation/types';

import { CardsList } from './CardsList';
import { BlockHeader } from './BlockHeader';

export function RecentTrips() {
  const navigation = useNavigation<AddExpenseScreenNavigationProp | TripExpensesScreenNavigationProp>();

  const emptyListMessage = 'You haven\'t recorded any trips yet';

  const redirectToAddExpenseScreen = () => navigation.navigate('AddExpense');
  const redirectToTripExpensesScreen = () => navigation.navigate('TripExpenses');

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
