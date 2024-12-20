import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../theme';
import { HomeScreenNavigationProp } from '../../navigation/types';

import { Header } from './Header';

export function AddExpense() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
    }
  };

  const changePlaceHandler = (value: string) => {
    setPlace(value);

  };
  const changeCountryHandler = (value: string) => setCountry(value);

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View>
          <Header />
          <View>
            <Text style={styles.label}>Where on Earth?</Text>
            <TextInput style={styles.input} value={place} onChangeText={changePlaceHandler} />
            <Text style={styles.label}>Which Country?</Text>
            <TextInput style={styles.input} value={country} onChangeText={changeCountryHandler} />
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.btn} onPress={handleAddTrip}>
            <Text style={[styles.label, { textAlign: 'center' }]}>Add Trip</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </ScrollView>
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
  }
});