import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {getCities} from '../redux/actions';

const keyExtractor = (item, index) => `${item.id}:${index}`;

const StartScreen = ({navigation}) => {
  const {cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const listMap = cities.reduce((carry, item) => {
    if (!carry[item.albumId]) {
      carry[item.albumId] = [];
    }
    carry[item.albumId].push(item);
    return carry;
  }, {});
  const flatList = Object.entries(listMap).map(([title, data]) => ({
    title,
    data,
  }));
  return (
    <FlatList
      data={flatList}
      keyExtractor={keyExtractor}
      horizontal={true}
      contentContainerStyle={{marginTop: '50%'}}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.albumContainer}
          onPress={() => {
            navigation.navigate('OnePageAlbum', {
              photos: item.data,
            });
          }}>
          <FastImage
            style={{width: 150, height: 150, borderRadius: 20}}
            resizeMode={FastImage.resizeMode.contain}
            source={{
              uri: item.data[0].thumbnailUrl,
            }}
          />
          <View style={styles.lastItemOverflow}>
            <Text>Title:{item.title}</Text>
            <Text>Photo Count:{item.data.length}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  albumContainer: {
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    width: 150,
    height: 150,
    marginRight: 20,
  },
  lastItemOverflow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0,0,0.2)',
  },
  header: {
    fontSize: 30,
  },
});
