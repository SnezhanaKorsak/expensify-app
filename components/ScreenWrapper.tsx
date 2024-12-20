import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../theme';

type Props = {
  children: React.ReactNode
}

export function ScreenWrapper({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: colors.bgGray200,
    paddingHorizontal: 16,
  }
});