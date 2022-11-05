import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
// import BeLike from '../../components/Button/BeLike';
import VerticalMovieList from '../../components/List/VerticalMovieList';
import ChickenEgg from '../../components/Section/ChickenEgg';

const MyData = require('../../json/My.json');
const ActorData = require('../../json/Actor.json').items;
const MovieData = require('../../json/Movie.json').items;

/** 시리즈 정보 */
function ActorInfo({route}) {
  const actor = ActorData.filter(item => item.id === route.params.propsId)[0];
  return (
    <>
      <ScreenHeader title={actor.name} />
      <GoBack />
      {/* <BeLike color={MyData.like.series.includes(actor.id) ? 'red' : '#333'} /> */}
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: actor.imageURL}} />
            </View>
            {/* <ChickenEgg width="40%" /> */}
          </View>
          <View style={{...styles.block, flex: 1}}>
            <ChickenEgg head="작품 수" body={actor.refer.length} width="50%" />
            <ChickenEgg head="좋아요 수" body={actor.like} width="50%" />
          </View>
        </View>
        <View style={{...styles.block, flex: 1}}>
          <VerticalMovieList propsRefer={actor.refer} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 64,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  block: {
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  imageWrapper: {
    width: 144,
    height: 192,
    marginTop: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ActorInfo;
