import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ChickenEgg({head, body, width}) {
  return (
    <View style={{...styles.container, width}}>
      <Text style={styles.sectionBody}>{body}</Text>
      <Text style={styles.sectionHead}>{head}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  sectionHead: {
    fontSize: 12,
  },
  sectionBody: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ChickenEgg;
