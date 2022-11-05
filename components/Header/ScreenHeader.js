import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ScreenHeader({
  title,
  visibility = true,
  align = true,
  backgroundColor = 'white',
  color = '#333',
  fontSize = 20,
}) {
  if (visibility) {
    return (
      <View style={{...styles.container, backgroundColor}}>
        <View
          style={{
            ...styles.wrapper,
            justifyContent: align ? 'center' : 'flex-start',
          }}>
          <Text style={{color, fontSize, fontWeight: 'bold'}}>{title}</Text>
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
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 36,
    paddingHorizontal: 24,
  },
});

export default ScreenHeader;
