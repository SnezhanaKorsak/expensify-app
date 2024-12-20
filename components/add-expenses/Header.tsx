import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

import { BackButton } from '../BackButton';

export function Header() {
  return (
    <View>
      <View style={{ position: 'relative' }}>
        <View style={{position: 'absolute'}}>
          <BackButton />
        </View>

        <Text style={styles.header}>Add Trip</Text>
      </View>

      <View style={styles.imgWrapper}>
        <Image style={{ width: 288, height: 288 }} source={require('../../assets/4.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: colors.heading,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});