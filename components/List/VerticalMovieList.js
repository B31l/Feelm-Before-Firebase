import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MovieData = require('../../json/Movie.json').items;

/**
 * 영화 포스터로 구성된 수직 FlatList를 반환한다.
 * @param {number[]} propsRefer 영화 ID로 구성된 리스트
 * @param {number} limit 포스터 제한
 * @param {number} width 포스터 너비
 * @param {number} height 포스터 높이
 * @param {number} borderRadius 포스터 테두리 곡률
 */
function VerticalMovieList({
  propsRefer,
  limit = 999,
  width = 64,
  height = 64,
  borderRadius = 8,
}) {
  const navigation = useNavigation();
  const temp = MovieData.filter(item => propsRefer.includes(item.id)); // 전체 데이터
  const data = temp.length >= limit ? temp.slice(0, limit) : temp; // 정제된 데이터
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{...styles.movieUlWrapper, height: height + 8}}
      onPress={() => navigation.navigate('MovieInfo', {propsId: item.id})}>
      <View style={{...styles.movieUl, width, height, borderRadius}}>
        <Image
          style={{...styles.movieLi, borderRadius}}
          source={{uri: item.posterImageURL}}
        />
      </View>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 16, color: 'black'}}>{item.name}</Text>
        <Text style={{fontSize: 12}}>{item.tag.join(' / ')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 0,
    backgroundColor: 'transparent',
  },
  movieUlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieUl: {
    marginRight: 16,
  },
  movieLi: {
    width: '100%',
    height: '100%',
  },
});

export default VerticalMovieList;
