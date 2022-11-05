import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentHeader from '../../components/Header/TransparentHeader';
import DirectorImg from '../../components/List/DirectorImg';
import HorizontalAtorList from '../../components/List/HorizontalActorList';

const MovieData = require('../../json/Movie.json').items;
const DirectorData = require('../../json/Director.json').items;
const ActorData = require('../../json/Actor.json').items;
/**
 * 시리즈 정보
 * @할것 가독성 향상을 위해 StatusBar을 상황에 따라 light-content 또는 dark-content로 설정하는 기능을 추가해야 합니다.
 */
function MovieInfo({route}) {
  const movie = MovieData.filter(item => item.id === route.params.propsId)[0];
  const director = DirectorData.filter(item => item.id === movie.director)[0];
  const actor = ActorData.filter(item => item.id === movie.actor[0])[0];
  return (
    <>
      <TransparentHeader backgroundColor="orange" />
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 240,
            backgroundColor: '#4287f5',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              // borderRadius: 80,
              // elevation: 5,
            }}
            source={{uri: movie.posterImageURL}}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 80,
              elevation: 10,
              width: 128,
              height: 128,
              marginTop: -96,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 128,
                height: '100%',
                // elevation: 5,
              }}
              source={{uri: movie.imageURL}}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: -12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 16,
              zIndex: 1,
            }}>
            <Icon name="favorite" color="red" size={16} />
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            paddingHorizontal: 8,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: 3,
            }}>
            <Text style={styles.nameText}>
              {movie.name}, {movie.year}
            </Text>
            <Text>감독 : {director.name}</Text>
            <Text>좋아요 {movie.like}</Text>
            <Text>장르 : {movie.tag}</Text>
            <Text>영화 정보 : {movie.summary}</Text>
            <View style={styles.horizontalSeparator} />
            <DirectorImg propsRefer={movie.director}/>
            <View style={styles.horizontalSeparator} />
          </View>
          <HorizontalAtorList propsRefer={movie.actor} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  repImageBefore: {
    backgroundColor: '#151515',
  },
  repImage: {
    width: '100%',
    height: 320,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    opacity: 0.5,
  },
  block: {
    width: '70%',
    height: 64,
    marginHorizontal: '15%',
    // marginTop: -32,
    marginBottom: 16,
    elevation: 5,
    // borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
  },
  name: {
    width: '75%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  likeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verticalSeparator: {
    width: 1,
    height: 40,
    marginHorizontal: 8,
    backgroundColor: '#ccc',
  },
  horizontalSeparator: {
    width: '100%',
    height: 1,
    marginVertical: 8,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MovieInfo;
