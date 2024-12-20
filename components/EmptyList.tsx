import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '../theme';

type Props = {
  message: string;
}

export function EmptyList({ message }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/empty.png')} style={styles.image} />
      <Text style={styles.text}>{message || 'data not found'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    rowGap: 12,
  },
  image: {
    width: 144,
    height: 144,
  },
  text: {
    fontWeight: 'bold',
    color: colors.textGray400,
  }
});