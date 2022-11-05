import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ChickenEgg from '../Section/ChickenEgg';

function ProfileMenuLike({movie, series, actor, director}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="favorite" color="#4287f5" size={24} />
      </View>

      <View style={styles.section}>
        <ChickenEgg head="영화" body={movie} width="25%" />
        <ChickenEgg head="시리즈" body={series} width="25%" />
        <ChickenEgg head="배우" body={actor} width="25%" />
        <ChickenEgg head="감독" body={director} width="25%" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});

export default ProfileMenuLike;
