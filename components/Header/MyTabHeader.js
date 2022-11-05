import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import GoAlertAndSetting from '../Button/GoAlertAndSetting';

function MyTabHeader({visibility, title}) {
  if (visibility) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          <GoAlertAndSetting color="#333" />
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
    alignItems: 'center',
    width: '100%',
    height: 32,
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    color: 'black',
  },
});

export default MyTabHeader;
