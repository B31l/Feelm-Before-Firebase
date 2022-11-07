import React from 'react';
import {StyleSheet, FlatList, View, Image} from 'react-native';

const OttData = require('../../json/Ott.json').items;
function OttNav() {
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
    width: '100%',
    height: 40,
    marginLeft: 8,
  },
  imageWrapper: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});

export default OttNav;
