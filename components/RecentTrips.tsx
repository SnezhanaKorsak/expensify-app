import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme';
import { items } from '../constants';
import { randomImage } from '../utills';

export function RecentTrips() {
  return (
    <View>
      <View style={styles.headerBlock}>
        <Text style={styles.headerText}>Recent Trips</Text>
        <TouchableOpacity style={styles.btn}>
          <Text>Add Trip</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 500 }}>
        <FlatList
          style={{ marginBottom: 20 }}
          data={items}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item }) => {
            const { place, country } = item;
            return (
              <TouchableOpacity style={styles.placeContainer}>
                <View>
                  <Image source={randomImage()} style={styles.placeImage} />
                  <Text style={styles.headerText}>{place}</Text>
                  <Text>{country}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
  },
  placeImage: {
    width: 144,
    height: 144,
    marginRight: 8,
  },
  placeContainer: {
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