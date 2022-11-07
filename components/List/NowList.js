import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MovieData = require('../../json/Movie.json').items;
const screenWidth = Math.round(Dimensions.get('window').width);
const pageWidth = screenWidth - (32 + 16) * 2;
/**
 * 영화 포스터로 구성된 수직 FlatList를 반환한다.
 * @param {number[]} propsRefer 영화 ID로 구성된 리스트
 * @param {number} limit 포스터 제한
 * @param {number} width 포스터 너비
 * @param {number} height 포스터 높이
 * @param {number} borderRadius 포스터 테두리 곡률
 */
function NowList({
  propsRefer,
  gap = 32,
  offset = 16,
  limit = 999,
  width = pageWidth,
  height = 240,
  borderRadius = 8,
}) {
  const navigation = useNavigation();
  const temp = MovieData.filter(item => propsRefer.includes(item.id)); // 전체 데이터
  const data = temp.length >= limit ? temp.slice(0, limit) : temp; // 정제된 데이터

  const [page, setPage] = useState(0);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{...styles.movieUlWrapper}}
      onPress={() => navigation.navigate('MovieInfo', {propsId: item.id})}>
      <View style={{...styles.movieUl, width, height, borderRadius}}>
        <Image
          style={{...styles.movieLi, borderRadius}}
          source={{uri: item.imageURL}}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={{...styles.text, fontSize: 24, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{...styles.text, fontSize: 16}}>
          {item.tag.join(' / ')}
        </Text>
      </View>
      <View style={styles.summaryWrapper}>
        <Text style={{...styles.text, fontSize: 14}}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  const onScroll = e => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (width + gap));
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        onScroll={onScroll}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        snapToInterval={width + gap}
        snapToAlignment="start"
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: -160,
  },
  movieUlWrapper: {
    alignItems: 'center',
    color: 'white',
    // backgroundColor: 'red',
    height: 480,
  },
  movieUl: {
    marginHorizontal: 16,
    elevation: 5,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'white',
  },
  movieLi: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  text: {
    color: 'white',
  },
  summaryWrapper: {
    borderColor: 'white',
    borderTopWidth: 1,
    width: 240,
    height: 160,
  },
});

export default NowList;
