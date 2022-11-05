import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function BlockTitle({left, right, icon}) {
  return (
    <View style={styles.blockTitle}>
      <Text style={styles.left}>{left}</Text>
      <View style={styles.rightWrapper}>
        <Text style={styles.right}>{right}</Text>
        <Icon name={icon} color="#777" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blockTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: 24,
  },
  left: {
    color: 'black',
    fontWeight: 'bold',
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginRight: 4,
    color: '#777',
  },
});
export default BlockTitle;
