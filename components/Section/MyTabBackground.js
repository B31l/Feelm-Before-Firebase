import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

function MyTabBacground({
  imageURL,
  visibility = true,
  height = 240,
  marginBottom = 0,
  opacity = 1,
}) {
  return (
    <View
      style={{
        ...styles.container,
        height,
        marginBottom,
        opacity: visibility ? 1 : 0,
      }}>
      <Image source={{uri: imageURL}} style={{...styles.image, opacity}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    width: '100%',
    backgroundColor: 'black',
    // marginBottom: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
});

export default MyTabBacground;
