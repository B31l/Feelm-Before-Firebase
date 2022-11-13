import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native';
import DirectorImg from '../../components/List/DirectorImg';
import HorizontalAtorList from '../../components/List/HorizontalActorList';

import GoBack from '../../components/Button/GoBack';
import GoSearch from '../../components/Button/GoSearch';
import MovieInfoHeader from '../../components/Header/MovieInfoHeader';
import MyTabBacground from '../../components/Section/MyTabBackground';
import BlockTitle from '../../components/Section/BlockTitle';
import ImageModal from 'react-native-image-modal';

const MovieData = require('../../json/Movie.json').items;
const DirectorData = require('../../json/Director.json').items;
const ActorData = require('../../json/Actor.json').items;
const screenWidth = Math.round(Dimensions.get('window').width);
/**
 * 시리즈 정보
 * @할것 가독성 향상을 위해 StatusBar을 상황에 따라 light-content 또는 dark-content로 설정하는 기능을 추가해야 합니다.
 */

// 수정 완
function MovieInfo({route}) {
  const movie = MovieData.filter(item => item.id === route.params.propsId)[0];
  const director = DirectorData.filter(item => item.id === movie.director)[0];
  const actor = ActorData.filter(item => item.id === movie.actor[0])[0];
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 160 ? setIsTop(true) : setIsTop(false);
  };

  return (
    <>
      <MovieInfoHeader visibility={isTop ? false : true} title={movie.name} />
      <GoBack />
      <GoSearch />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <MyTabBacground
          imageURL={movie.imageURL}
          visibility={isTop ? true : false}
          // marginBottom={160}
          opacity={0.5}
        />
        <View style={styles.informationWrapper}>
          <View style={styles.posterImageWrapper}>
            <ImageModal
              style={styles.image}
              source={{uri: movie.posterImageURL}}
            />
          </View>
          <View style={styles.information}>
            <Text style={{color: 'white'}}>
              [{movie.year}] {movie.tag.join(' / ')}
            </Text>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              {movie.name}
            </Text>
          </View>
        </View>
        <BlockTitle left="줄거리" />
        <View style={styles.block}>
          <Text style={styles.white}>{movie.summary}</Text>
        </View>

        <BlockTitle left="감독/배우" />
        <View style={styles.block}>
          <DirectorImg propsRefer={movie.director} />
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#FFD63F',
              paddingBottom: 16,
              marginBottom: 16,
            }}
          />
          <HorizontalAtorList propsRefer={movie.actor} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  posterImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    height: 144,
    marginLeft: 16,
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor: 'white',
  },
  image: {
    resizeMode: 'cover',
    width: 96,
    height: 144,
    borderRadius: 8,
  },
  informationWrapper: {
    flexDirection: 'row',
    height: 144,
    marginTop: -80,
    marginBottom: 16,
  },
  information: {
    justifyContent: 'flex-end',
    height: 80,
    marginLeft: 16,
    // paddingBottom: 16,
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  block: {
    marginBottom: 16,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    // borderColor:"#0CF2F2",
    // borderWidth:1,
    // borderRadius: 4,
    // backgroundColor: 'black',
  },
});

export default MovieInfo;
