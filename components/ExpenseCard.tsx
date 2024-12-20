import { View, Text, StyleSheet } from 'react-native';

import { ExpenseItem } from '../types';
import { categoryBG, colors } from '../theme';

type Props = {
  expenseItem: ExpenseItem,
}

export function ExpenseCard({ expenseItem }: Props) {
  const { title, category, amount } = expenseItem;

  return (
    <View style={[styles.container, { backgroundColor: categoryBG[category] }]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{category}</Text>
      </View>

      <View>
        <Text>${amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 12,
  },
  title: {
    color: colors.heading,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.heading,
    fontSize: 12,
    lineHeight: 16,
  }
});