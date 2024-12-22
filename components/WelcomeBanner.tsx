import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { colors } from '../theme';

const { width } = Dimensions.get('window');

export function WelcomeBanner() {
  return (
      <View style={styles.image}>
        <Image source={require('../assets/welcome.png')} style={{ width: width*0.9, height: 350, borderRadius: 45,}} />
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    color: colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 40,
  }
});