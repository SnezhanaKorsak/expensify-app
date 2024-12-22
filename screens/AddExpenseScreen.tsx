import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { colors } from '../theme';
import { categories } from '../constants';
import { NavigationProp } from '../navigation/types';

import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader } from '../components/ScreenHeader';

export function AddExpenseScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    if (title && amount && category) {
      navigation.goBack();
    }
  };

  const changeTileHandler = (value: string) => setTitle(value);
  const changeAmountHandler = (value: string) => setAmount(value);
  const changeCategoryHandler = (value: string) => () => setCategory(value);

  return (
    <ScreenWrapper>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View>
            <ScreenHeader title="Add Expense" imageBanner={require('../assets/expenseBanner.png')} />
            <View>
              <Text style={styles.label}>For what?</Text>
              <TextInput style={styles.input} value={title} onChangeText={changeTileHandler} />
              <Text style={styles.label}>How much?</Text>
              <TextInput style={styles.input} value={amount} onChangeText={changeAmountHandler} />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Category</Text>
            <View style={styles.categoryContainer}>
              {categories.map(item => {
                const isActiveCategory = item === category;
                const bgColor = isActiveCategory ? colors.bgGreen200 : colors.bgWhite;

                return (
                  <TouchableOpacity
                    style={[styles.category, { backgroundColor: bgColor }]}
                    key={item}
                    onPress={changeCategoryHandler(item)}
                  >
                    <Text style={styles.categoryLabel}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.btn} onPress={handleAddExpense}>
              <Text style={[styles.label, { textAlign: 'center' }]}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
  },
  input: {
    padding: 16,
    backgroundColor: colors.bgWhite,
    borderRadius: 10,
    marginVertical: 12,
  },
  btn: {
    backgroundColor: colors.button,
    marginTop: 50,
    padding: 12,
    borderRadius: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 12,
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bgGray700,
  },
  categoryLabel: {
    color: colors.heading,
    fontWeight: 'semibold',
    fontSize: 16,
    lineHeight: 24,
  },
});
