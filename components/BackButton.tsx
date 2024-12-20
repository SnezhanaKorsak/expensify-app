import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ChevronLeftIcon } from 'react-native-heroicons/outline';

import { colors } from '../theme';

export function BackButton() {
  const navigation = useNavigation();

  const goBackHandle = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.btn} onPress={goBackHandle}>
      <ChevronLeftIcon size="30" color={colors.button} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 32,
    height: 32,
    backgroundColor: colors.bgWhite,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: colors.bgGray700,
  },
});