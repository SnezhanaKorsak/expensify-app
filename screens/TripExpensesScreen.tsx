import { useEffect } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

import {
  NavigationProp,
  TripExpensesScreenRouteProp
} from '../navigation/types';

import { useAppDispatch, useAppSelector } from '../hooks/use-store';
import { useToastError } from '../hooks/use-toast-error';
import { fetchExpenses } from '../store/expenses/thunk';
import { expensesProcessSelector, expensesSelector } from '../store/expenses/selectors';

import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader } from '../components/ScreenHeader';
import { BlockHeader } from '../components/BlockHeader';
import { EmptyList } from '../components/EmptyList';
import { ExpenseCard } from '../components/ExpenseCard';
import { Loading } from '../components/Loading';

export function TripExpensesScreen() {
  const dispatch = useAppDispatch();
  const { params } = useRoute<TripExpensesScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const isFocused = useIsFocused();

  const expenseItems = useAppSelector(expensesSelector);
  const { loading, error } = useAppSelector(expensesProcessSelector);

  const { location } = params;
  const emptyListMessage = 'You haven\'t recorded any expenses yet';

  const redirectToAddExpensesScreen = () => {
    navigation.navigate('AddExpense', { location });
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchExpenses(location.id));
    }
  }, [isFocused, location.id]);

  if (error && error.message) {
    useToastError('Error', error.message);
    return;
  }

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
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </View>
    </ScreenWrapper>
  );
}