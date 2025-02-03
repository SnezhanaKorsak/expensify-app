import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import {
  AddExpenseScreenRouteProp,
  NavigationProp,
} from '../navigation/types';

import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader } from '../components/ScreenHeader';
import { useToastError } from '../hooks/use-toast-error';
import { addDoc } from 'firebase/firestore';
import { expensesRef } from '../config/firebase';
import { FirebaseError } from 'firebase/app';
import { Loading } from '../components/Loading';

export function AddExpenseScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { params } = useRoute<AddExpenseScreenRouteProp>();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddExpense = async () => {
    if (!title || !amount || !category) {
      useToastError('Please fill in all fields!');
      return;
    }

    try {
      setLoading(true);

      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: params.location.id,
      });

      setLoading(false);

      if (doc && doc.id) {
        navigation.goBack();
      }
    } catch (error: unknown) {
      setLoading(false);

      const errorMessage =
        error instanceof FirebaseError ? error.message : 'Something went wrong';
      useToastError('Authentication failed', errorMessage);
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
            <ScreenHeader title="Add Expense"
                          imageBanner={require('../assets/expenseBanner.png')} />
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
            {loading ? (
              <Loading />
            ) : (
              <TouchableOpacity style={styles.btn} onPress={handleAddExpense}>
                <Text style={[styles.label, { textAlign: 'center' }]}>Add Expense</Text>
              </TouchableOpacity>
            )}
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
