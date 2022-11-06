import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const OttData = require('../../json/Ott.json').items;
function OttTabNav() {
  const data = OttData.map(item => item.iconURL);
  const renderItem = ({item}) => (
    <View style={styles.imageWrapper}>
      <Image style={styles.image} source={{uri: item}} />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 80,
    marginTop: 80,
    marginRight: 40,
    paddingHorizontal: 16,
  },
  imageWrapper: {
    width: 48,
    height: 48,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default OttTabNav;
