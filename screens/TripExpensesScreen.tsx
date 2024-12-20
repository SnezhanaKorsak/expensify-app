import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader } from '../components/ScreenHeader';
import { CardsList } from '../components/CardsList';
import { BlockHeader } from '../components/BlockHeader';

export function TripExpensesScreen() {
  const emptyListMessage = 'You haven\'t recorded any expenses yet';

  const redirectToTripExpensesScreen = () => {
  };

  return (
    <ScreenWrapper>
      <ScreenHeader title="Trip Expenses" imageBanner={require('../assets/7.png')} />

      <BlockHeader
        title="Expenses"
        buttonTitle="Add Expense"
        buttonHandler={() => {
        }}
      />

      <CardsList
        emptyListMessage={emptyListMessage}
        redirectHandler={redirectToTripExpensesScreen}
      />
    </ScreenWrapper>
  );
}