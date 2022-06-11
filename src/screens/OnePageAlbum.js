import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
const keyExtractor = (item, index) => `${item.id}:${index}`;

const OnePageAlbum = ({route, navigation}) => {
  const {photos} = route.params;
  return (
    <FlatList
      data={photos}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <TouchableOpacity onPress={}>
          <FastImage
            style={{width: 150, height: 150, borderRadius: 20}}
            resizeMode={FastImage.resizeMode.contain}
            source={{
              uri: item.thumbnailUrl,
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default OnePageAlbum;

const styles = StyleSheet.create({});
