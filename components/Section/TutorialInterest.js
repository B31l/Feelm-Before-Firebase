import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ChickenEgg from './ChickenEgg';

function TutorialInterest({message}) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.iconWrapper}>
        <Icon name="close" color="white" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#4287f5',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  message: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TutorialInterest;
