import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// 수정 완 그라데이션
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
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'black']}
        style={{zIndex: 101, height: 240}} // <- Image 컴포넌트의 height와 동일하게 설정
      />
      <Image source={{uri: imageURL}} style={{...styles.image}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
  },
  image: {
    width: 410,
    height: 240,
    position: 'absolute',
    opacity: 0.75,
    zIndex: 100,
  },
});

export default MyTabBacground;
