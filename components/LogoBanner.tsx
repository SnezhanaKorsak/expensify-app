import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme';

export function LogoBanner() {
  return (
    <View>
      <View style={styles.logoBlock}>
        <Text style={styles.logo}>Expensify</Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Image source={require('../assets/banner.png')} style={{ width: 250, height: 250 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.heading,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 36,
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  logoutBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.bgWhite,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bgGray700,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgBlue200,
    marginVertical: 16,
    borderRadius: 15,
  },
});