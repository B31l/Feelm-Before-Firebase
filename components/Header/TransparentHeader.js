import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TransparentHeader({backgroundColor = '#4287f5'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={{...styles.wrapper, backgroundColor}}>
        <Icon
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.pop()}
        />
      </View>
      <View style={{...styles.wrapper, backgroundColor}}>
        <Icon
          name="search"
          size={24}
          color="white"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  wrapper: {
    width: 32,
    height: 32,
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransparentHeader;
