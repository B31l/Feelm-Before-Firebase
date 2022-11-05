import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from '../List/HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;

/**
 * 특정 사용자가 제공하는 커스텀 시리즈
 * @param {number} propsId 시리즈 ID
 */
function CustomSeries({propsId}) {
  const navigation = useNavigation();
  const series = SeriesData.filter(item => item.id === propsId)[0];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SeriesInfo', {propsId: propsId})}>
      <View style={styles.left}>
        <Text style={styles.seriesName}>{series.name}</Text>
        <View style={styles.seriesInfo}>
          <View style={styles.seriesLike}>
            <Icon name="favorite" color="red" size={16} />
            <Text style={styles.text}>{series.like}</Text>
          </View>
          <Text style={styles.text}>영화 {series.refer.length}개</Text>
        </View>
        <Text style={styles.seriesCreator}>Feelm에서 제공</Text>
      </View>

      <View style={styles.right}>
        <HorizontalMovieList propsRefer={series.refer} limit={4} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 180,
    marginTop: 16,
    marginHorizontal: 16,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: 'white',
  },
  left: {
    width: 160,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  right: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
  seriesName: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  seriesInfo: {
    flexDirection: 'row',
  },
  seriesLike: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  seriesCreator: {
    color: '#777',
    fontSize: 12,
  },
});

export default CustomSeries;
