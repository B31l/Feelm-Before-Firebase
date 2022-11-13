import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
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

// 수정 완
function HorizontalAtorList({
  propsRefer,
  limit = 999,
  width = 64,
  height = 64,
  margin = [0, 0, 0, 0],
  padding = [4, 0],
  borderRadius = 8,
}) {
  const navigation = useNavigation();
  const styles = uStyles(width, height, margin, padding, borderRadius);
  const temp = ActorData.filter(item => propsRefer.includes(item.id)); // 전체 데이터
  const data = temp.length >= limit ? temp.slice(0, limit) : temp; // 정제된 데이터
  const renderItem = ({item}) => (
    <View style={styles.content}>
      <View style={styles.movieUl}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ActorInfo', {propsId: item.id})}>
          <Image style={styles.movieLi} source={{uri: item.imageURL}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const uStyles = (width, height, margin, padding, borderRadius) =>
  StyleSheet.create({
    container: {
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3],
      backgroundColor: 'transparent',
    },
    movieUl: {
      width,
      height,
      borderRadius,
      marginRight: padding[0],
      marginLeft: padding[1],
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
    },
    movieLi: {
      width: '100%',
      height: '100%',
      // borderRadius,
      // borderWidth: 1,
      // borderColor: '#ccc',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default HorizontalAtorList;
