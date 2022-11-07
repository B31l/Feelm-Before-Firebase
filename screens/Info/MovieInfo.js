import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DirectorImg from '../../components/List/DirectorImg';
import HorizontalAtorList from '../../components/List/HorizontalActorList';

import GoBack from '../../components/Button/GoBack';
import GoSearch from '../../components/Button/GoSearch';
import BeLike from '../../components/Button/BeLike';
import MovieInfoHeader from '../../components/Header/MovieInfoHeader';
import MyTabBacground from '../../components/Section/MyTabBackground';
import BlockTitle from '../../components/Section/BlockTitle';

const MovieData = require('../../json/Movie.json').items;
const DirectorData = require('../../json/Director.json').items;
const ActorData = require('../../json/Actor.json').items;
const screenWidth = Math.round(Dimensions.get('window').width);
/**
 * 시리즈 정보
 * @할것 가독성 향상을 위해 StatusBar을 상황에 따라 light-content 또는 dark-content로 설정하는 기능을 추가해야 합니다.
 */
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
      <GoBack color={isTop ? 'white' : '#333'} />
      <GoSearch color={isTop ? 'white' : '#333'} />
      <BeLike color={isTop ? 'white' : '#333'} />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <MyTabBacground
          imageURL={movie.imageURL}
          visibility={isTop ? true : false}
          // marginBottom={160}
          opacity={0.5}
        />
        <View style={styles.informationWrapper}>
          <View style={styles.posterImageWrapper}>
            <Image style={styles.image} source={{uri: movie.posterImageURL}} />
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
          <Text>{movie.summary}</Text>
        </View>

        <BlockTitle left="제작진" />
        <View style={styles.block}>
          <DirectorImg propsRefer={movie.director} />
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
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
    backgroundColor: '#eee',
  },
  posterImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    height: 144,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
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
    paddingBottom: 16,
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
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default MovieInfo;
