import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import BeLike from '../../components/Button/BeLike';
import VerticalMovieList from '../../components/List/VerticalMovieList';
import ChickenEgg from '../../components/Section/ChickenEgg';

const MyData = require('../../json/My.json');
const SeriesData = require('../../json/Series.json').items;

/** 시리즈 정보 */
function SeriesInfo({route}) {
  const series = SeriesData.filter(item => item.id === route.params.propsId)[0];
  console.log(MyData.like.series.includes(series.id));
  return (
    <>
      <ScreenHeader title={series.name} />
      <GoBack />
      <BeLike color={MyData.like.series.includes(series.id) ? 'red' : '#333'} />
      <View style={styles.container}>
        <View style={{...styles.block, flexDirection: 'row'}}>
          <ChickenEgg head="크리에이터" body={series.creator} width="40%" />
          <ChickenEgg head="작품 수" body={series.refer.length} width="30%" />
          <ChickenEgg head="좋아요 수" body={series.like} width="30%" />
        </View>
        <View style={{...styles.block, flex: 1}}>
          <VerticalMovieList propsRefer={series.refer} />
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
});

export default SeriesInfo;
