import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** 검색 */
function GoSearch({color = 'white'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          name="search"
          size={20}
          color={color}
          onPress={() => navigation.navigate('Search')}
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
    right: 8,
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

export default GoSearch;
