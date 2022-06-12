import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Portal} from 'react-native-portalize';
const keyExtractor = (item, index) => `${item.id}:${index}`;

const OnePageAlbum = ({route, navigation}) => {
  const {photos} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    return () => {
      console.log(1);
    };
  }, [modalVisible]);
  return (
    <SafeAreaView>
      <FlatList
        data={photos}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setValue(item.url), setModalVisible(!modalVisible);
              }}>
              <FastImage
                style={{width: 150, height: 150, borderRadius: 20}}
                resizeMode={FastImage.resizeMode.contain}
                source={{
                  uri: item.thumbnailUrl,
                }}
              />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: '28%',
                    right: 0,
                    zIndex: 10,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>X</Text>
                </TouchableOpacity>
                <FastImage
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                  resizeMode={FastImage.resizeMode.contain}
                  source={{
                    uri: value,
                  }}
                />
              </View>
            </Modal>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OnePageAlbum;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});
