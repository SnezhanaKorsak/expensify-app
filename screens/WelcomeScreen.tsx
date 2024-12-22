import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../theme';
import { NavigationProp } from '../navigation/types';

import { ScreenWrapper } from '../components/ScreenWrapper';
import { WelcomeBanner } from '../components/WelcomeBanner';

export function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const redirectToSignIn = () => navigation.navigate('SignIn');
  const redirectToSignUp = () => navigation.navigate('SignUp');

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <WelcomeBanner />

        <View>
          <Text style={styles.logo}>Expensify</Text>

          <TouchableOpacity style={styles.btn} onPress={redirectToSignIn}>
            <Text style={styles.btnTitle}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={redirectToSignUp}>
            <Text style={styles.btnTitle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  logo: {
    color: colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: colors.button,
    padding: 12,
    borderRadius: 25,
    marginBottom: 20
  },
  btnTitle: {
    color: colors.bgWhite,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
  }
});