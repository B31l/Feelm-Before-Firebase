import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import HorizontalMovieList from '../List/HorizontalMovieList';

/* 시리즈 컴포넌트 */
function CustomSeries({propsId}) {
  const SeriesData = require('../../json/Series.json').items;
  const navigation = useNavigation();
  const series = SeriesData.filter(item => item.id === propsId)[0];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SeriesInfo', {propsId: propsId})}>
      <View style={styles.top}>
        <View style={styles.left}>
          <Text style={styles.seriesName}>{series.name}</Text>
          {/* <View style={styles.seriesLike}>
            <Icon name="favorite" color="red" size={16} />
            <Text style={styles.text}>{series.like}</Text>
          </View> */}
        </View>
        <View style={styles.right}>
          <Text style={styles.seriesCreator}>{series.creator}에서 제공</Text>
        </View>
      </View>
      <HorizontalMovieList propsRefer={series.refer} limit={4} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginVertical: 24,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 4,
    marginBottom: 8,
    elevation: 0,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  right: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  seriesName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seriesLike: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  seriesCreator: {
    color: '#777',
    fontSize: 12,
    paddingHorizontal: 8,
  },
});

export default CustomSeries;
