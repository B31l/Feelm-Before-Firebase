import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function MovieInfoHeader({visibility, title}) {
  if (visibility) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 64,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 36,
    paddingHorizontal: 24,
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MovieInfoHeader;
