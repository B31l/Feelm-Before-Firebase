import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from '../List/HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;
const MovieData = require('../../json/Movie.json').items;

/**
 * 특정 사용자가 제공하는 커스텀 시리즈
 * @param {number} propsId 시리즈 ID
 */
function NowInTheatersSeries() {
  const navigation = useNavigation();
  const series = SeriesData.filter(item => item.id === 0)[0];
  const represent = series.refer[3];
  const img = MovieData.filter(item => item.id === represent)[0].imageURL;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.5,
        }}
        source={{
          uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F04%2Fthe-roundup-teaser-video-don-lee-ft.jpg?w=960&cbr=1&q=90&fit=max',
        }}
      />
      <View style={{height: 80, marginTop: -80, marginLeft: 16}}>
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
          범죄도시 2
        </Text>
        <Text style={{color: 'white'}}>액션 / 범죄</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    height: 240,
    backgroundColor: 'black',
  },
  moreVert: {
    alignItems: 'flex-end',
    height: 32,
    justifyContent: 'center',
  },
  section: {
    flex: 1,
    // marginTop: -32,
    flexDirection: 'row',
  },
  left: {
    width: 160,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },

  title: {
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
  },

  info: {
    paddingRight: 8,
    alignItems: 'center',
  },
  large: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
    color: '#777',
  },
  text: {
    color: 'black',
  },
});

export default NowInTheatersSeries;
