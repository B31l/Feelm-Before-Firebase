import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import GoSearch from '../../components/Button/GoSearch';
import VerticalMovieList from '../../components/List/VerticalMovieList';
import ImageModal from 'react-native-image-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ActorData = require('../../json/Actor.json').items;
// 수정 완
/** 시리즈 정보 */
function ActorInfo({route}) {
  const actor = ActorData.filter(item => item.id === route.params.propsId)[0];
  return (
    <>
      <ScreenHeader title={'배우'} align />
      <GoBack />
      <GoSearch />
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <View style={styles.imageWrapper}>
              <ImageModal style={styles.image} source={{uri: actor.imageURL}} />
            </View>
          </View>

          <View style={{...styles.block_p, flex: 1}}>
            <View style={styles.Like}>
              <Icon name="perm-identity" color="white" size={24} />
            </View>
            <Text style={styles.name}>{actor.name}</Text>
            <View style={{flexDirection: 'row', marginVertical: 8}}>
              <View style={styles.Like}>
                <Icon name="favorite" color="red" size={16} />
                <Text style={styles.text}> {actor.like}</Text>
              </View>
              <View style={styles.Like}>
                <Icon name="movie" color="#FFD63F" size={16} />
                <Text style={styles.text}> {actor.refer.length}</Text>
              </View>
            </View>
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
    paddingTop: 80,
    backgroundColor: 'black',
  },
  block_p: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
  },
  block: {
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    // #323232
    backgroundColor: '#272727',
  },
  imageWrapper: {
    width: 144,
    height: 192,
    marginTop: 16,
    borderRadius: 8,
  },
  image: {
    resizeMode: 'contain',
    width: 144,
    height: 192,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#111',
  },
  Like: {
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  name: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default ActorInfo;
