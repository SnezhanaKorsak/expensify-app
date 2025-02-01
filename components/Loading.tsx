import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../theme';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  }
});