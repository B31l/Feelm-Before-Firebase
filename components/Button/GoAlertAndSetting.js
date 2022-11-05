import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function GoAlertAndSetting({color}) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.icon}>
        <Icon
          name="notifications"
          size={20}
          color={color}
          onPress={() => navigation.navigate('Alert')}
        />
      </View>
      <View style={styles.icon}>
        <Icon
          name="settings"
          size={20}
          color={color}
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default GoAlertAndSetting;
