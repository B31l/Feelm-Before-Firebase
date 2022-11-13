import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ScreenHeader({
  title,
  visibility = true,
  align = false,
  backgroundColor = 'transparent',
  color = 'white',
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
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 32,
    paddingHorizontal: 16,
  },
});

export default ScreenHeader;
