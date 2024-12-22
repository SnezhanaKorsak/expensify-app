import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

import {
  NavigationProp,
  TripExpensesScreenRouteProp
} from '../navigation/types';
import { expenseItems } from '../constants';

import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader } from '../components/ScreenHeader';
import { BlockHeader } from '../components/BlockHeader';
import { EmptyList } from '../components/EmptyList';
import { ExpenseCard } from '../components/ExpenseCard';


export function TripExpensesScreen() {
  const { params } = useRoute<TripExpensesScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  const { location } = params;
  const emptyListMessage = 'You haven\'t recorded any expenses yet';

  const redirectToAddExpensesScreen = () => {
    navigation.navigate('AddExpense');
  };

  return (
    <ScreenWrapper>
      <ScreenHeader
        title={location.place}
        subtitle={location.country}
        imageBanner={require('../assets/7.png')}
      />

      <BlockHeader
        title="Expenses"
        buttonTitle="Add Expense"
        buttonHandler={redirectToAddExpensesScreen}
      />

      <View style={{ height: 500 }}>
        <FlatList
          style={{ marginBottom: 20 }}
          data={expenseItems}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList message={emptyListMessage} />}
          renderItem={({ item }) => {
            return (
              <ExpenseCard expenseItem={item} />
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
}