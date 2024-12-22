import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType
} from 'react-native';

import { NavigationProp } from '../navigation/types';
import { colors } from '../theme';

import { ScreenHeader } from './ScreenHeader';

type Props = {
  title: string;
  bannerImage: ImageSourcePropType;
}

export function Login({ title, bannerImage }: Props) {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      navigation.navigate('Home');
    }
  };

  const changeEmailHandler = (value: string) => setEmail(value);
  const changePasswordHandler = (value: string) => setPassword(value);

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View>
          <ScreenHeader title={title} imageBanner={bannerImage} />
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} value={email} onChangeText={changeEmailHandler} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry value={password} onChangeText={changePasswordHandler} />
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={[styles.label, { textAlign: 'center' }]}>{title}</Text>
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