import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ActorData = require('../../json/Actor.json').items;

/**
 * 영화 포스터로 구성된 FlatList를 반환한다.
 * @param {number[]} propsRefer 영화 ID로 구성된 리스트
 * @param {number} width 포스터 너비
 * @param {number} height 포스터 높이
 * @param {number[]} margin 컴포넌트의 margin (Top, Right, Bottom / Left)
 * @param {number[]} padding 포스터 간격 (Right / Left)
 * @param {number} borderRadius 포스터 테두리 곡률
 */
function HorizontalAtorList({
  propsRefer,
  limit = 999,
  width = 120,
  height = 180,
  margin = [0, 0, 10, 0],
  padding = [0, 4],
  borderRadius = 0,
}) {
  const navigation = useNavigation();
  const styles = uStyles(width, height, margin, padding, borderRadius);
  const temp = ActorData.filter(item => propsRefer.includes(item.id)); // 전체 데이터
  const data = temp.length >= limit ? temp.slice(0, limit) : temp; // 정제된 데이터
  const renderItem = ({item}) => (
    <View style={styles.movieUl}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ActorInfo', {propsId: item.id})}>
        <Image style={styles.movieLi} source={{uri: item.imageURL}} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
}

const uStyles = (width, height, margin, padding, borderRadius) =>
  StyleSheet.create({
    container: {
      height,
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3],
      backgroundColor: 'transparent',
    },
    movieUl: {
      width,
      borderRadius,
      marginRight: padding[0],
      marginLeft: padding[1],
    },
    movieLi: {
      width: '100%',
      height: '100%',
      borderRadius,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  });

export default HorizontalAtorList;
