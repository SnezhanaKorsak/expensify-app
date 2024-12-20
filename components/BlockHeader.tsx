import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../theme';

type Props = {
  title: string;
  buttonTitle: string;
  buttonHandler: () => void;
}

export function BlockHeader({ title, buttonTitle, buttonHandler }: Props) {
  return (
    <View style={styles.headerBlock}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity style={styles.btn} onPress={buttonHandler}>
        <Text>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.bgWhite,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bgGray700,
  },
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    maxWidth: 144,
  }
});