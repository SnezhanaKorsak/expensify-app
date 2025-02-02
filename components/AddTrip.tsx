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

import { addDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

import { colors } from '../theme';
import { NavigationProp } from '../navigation/types';
import { tripsRef } from '../config/firebase';
import { userSelector } from '../store/user/selectors';
import { useAppSelector } from '../hooks/use-store';
import { useToastError } from '../hooks/use-toast-error';

import { ScreenHeader } from './ScreenHeader';
import { Loading } from './Loading';

export function AddTrip() {
  const navigation = useNavigation<NavigationProp>();

  const user = useAppSelector(userSelector);

  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddTrip = async () => {
    if (!place || !country) {
      useToastError('Place and country are required');
      return;
    }

    try {
      setLoading(true);

      let doc = await addDoc(tripsRef, {
        place,
        country,
        userId: user?.uid,
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

  const changePlaceHandler = (value: string) => setPlace(value);
  const changeCountryHandler = (value: string) => setCountry(value);

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View>
          <ScreenHeader title="Add Trip" imageBanner={require('../assets/4.png')} />
          <View>
            <Text style={styles.label}>Where on Earth?</Text>
            <TextInput style={styles.input} value={place} onChangeText={changePlaceHandler} />
            <Text style={styles.label}>Which Country?</Text>
            <TextInput style={styles.input} value={country} onChangeText={changeCountryHandler} />
          </View>
        </View>

        <View>
          {loading ? (
              <Loading />
            )
            : (
              <TouchableOpacity style={styles.btn} onPress={handleAddTrip}>
                <Text style={[styles.label, { textAlign: 'center' }]}>Add Trip</Text>
              </TouchableOpacity>
            )}
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