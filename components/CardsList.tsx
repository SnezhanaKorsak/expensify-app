import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { randomImage } from '../utills';
import { colors } from '../theme';
import { Location } from '../types';

import { useAppSelector } from '../hooks/use-store';
import { tripsProcessSelector, tripsSelector } from '../store/trips/selectors';
import { useToastError } from '../hooks/use-toast-error';

import { EmptyList } from './EmptyList';
import { Loading } from './Loading';

type Props = {
  emptyListMessage: string;
  redirectHandler: (location: Location) => void;
}

export function CardsList({ emptyListMessage, redirectHandler }: Props) {
  const trips = useAppSelector(tripsSelector);
  const { loading, error } = useAppSelector(tripsProcessSelector);

  if (error && error.message) {
    useToastError('Error', error.message);
    return;
  }

  return (
    <View style={{ height: 500 }}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={{ marginBottom: 20 }}
          data={trips}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          ListEmptyComponent={<EmptyList message={emptyListMessage} />}
          renderItem={({ item }) => {
            const { place, country } = item;
            return (
              <TouchableOpacity style={styles.placeContainer} onPress={() => redirectHandler(item)}>
                <View>
                  <Image source={randomImage()} style={styles.placeImage} />
                  <Text style={styles.label}>{place}</Text>
                  <Text>{country}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    maxWidth: 144,
  },
  placeImage: {
    maxWidth: 144,
    height: 124,
    marginRight: 8,
  },
  placeContainer: {
    width: '46%',
    backgroundColor: colors.bgWhite,
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    marginTop: 12,
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  }
});