import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function BeLike({color = '#333'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          name="favorite"
          size={20}
          color={color}
          onPress={() => console.log('조와용')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    top: 28,
    right: 8,
    zIndex: 1,
    width: 32,
    height: 36,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
});

export default BeLike;
