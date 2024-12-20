import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

import { BackButton } from './BackButton';

type Props = {
  title: string;
  imageBanner: ImageSourcePropType;
}

export function ScreenHeader({ title, imageBanner }: Props) {
  return (
    <View>
      <View style={{ position: 'relative' }}>
        <View style={{ position: 'absolute' }}>
          <BackButton />
        </View>

        <Text style={styles.header}>{title}</Text>
      </View>

      <View style={styles.imgWrapper}>
        <Image style={{ width: 288, height: 288 }} source={imageBanner} />
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