import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ChickenEggAndIcon({
  iconName,
  iconSize = 24,
  iconColor = 'white',
  iconBackgroundColor = '#ccc',
  wrapperSize = 48,
  head,
  body,
  width,
}) {
  return (
    <View style={{...styles.container, width}}>
      <View
        style={{
          ...styles.icon,
          width: wrapperSize,
          height: wrapperSize,
          borderRadius: wrapperSize,
          backgroundColor: iconBackgroundColor,
        }}>
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </View>
      <Text style={styles.sectionBody}>{body}</Text>
      <Text style={styles.sectionHead}>{head}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 128,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default ChickenEggAndIcon;
