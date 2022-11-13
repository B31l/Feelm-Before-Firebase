import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** 뒤로가기 */
function GoBack({color = '#FFD63F'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          name="arrow-back"
          size={20}
          color={color}
          onPress={() => navigation.pop()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    top: 48,
    left: 8,
    zIndex: 1,
    width: 32,
    height: 32,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
});

export default GoBack;
