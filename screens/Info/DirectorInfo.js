import React from 'react';
import {StyleSheet, View, TexIt, Image} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import VerticalMovieList from '../../components/List/VerticalMovieList';
import ChickenEgg from '../../components/Section/ChickenEgg';

const DirectorData = require('../../json/Director.json').items;


function DirectorInfo({route}) {
  const director = DirectorData.filter(item => item.id === route.params.propsId)[0];

  return (
    <>
      <ScreenHeader title={director.name} />
      <GoBack />
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: director.imageURL}} />
            </View>
            {/* <ChickenEgg width="40%" /> */}
          </View>
          <View style={{...styles.block, flex: 1}}>
            <ChickenEgg head="작품 수" body={director.refer.length} width="50%" />
            <ChickenEgg head="좋아요 수" body={director.like} width="50%" />
          </View>
        </View>
        <View style={{...styles.block, flex: 1}}>
          <VerticalMovieList propsRefer={director.refer} />
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
export default DirectorInfo;
