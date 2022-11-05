import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SeriesTabNav({visibility}) {
  return (
    <View
      style={{
        ...styles.container,
        height: visibility ? 64 : 0,
      }}>
      <Text style={{...styles.nav, fontSize: 32}}>모두</Text>
      <Text style={styles.nav}>시리즈</Text>
      <Text style={styles.nav}>감독</Text>
      <Text style={styles.nav}>배우</Text>
      <Text style={styles.nav}>OTT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  nav: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default SeriesTabNav;
