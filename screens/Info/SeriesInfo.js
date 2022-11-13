import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import GoSearch from '../../components/Button/GoSearch';
import VerticalMovieList from '../../components/List/VerticalMovieList';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 수정 완
const MyData = require('../../json/My.json');
const SeriesData = require('../../json/Series.json').items;

function SeriesInfo({route}) {
  const series = SeriesData.filter(item => item.id === route.params.propsId)[0];
  console.log(MyData.like.series.includes(series.id));
  return (
    <>
      <ScreenHeader title={series.name} />
      <GoBack />
      <GoSearch />
      <View style={styles.container}>
        <View style={styles.info}>
          {/* <ChickenEgg head="크리에이터" body={series.creator} width="40%" />
          <ChickenEgg head="작품 수" body={series.refer.length} width="30%" />
          <ChickenEgg head="좋아요 수" body={series.like} width="30%" /> */}
          <View style={styles.about}>
            <Text style={styles.text}>{series.creator}</Text>
            <View style={styles.seriesLike}>
              <Icon name="favorite" color="red" size={16} />
              <Text style={styles.text}>{series.like}</Text>
            </View>
          </View>
          <Text style={styles.text}>{series.refer.length}개의 작품</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: 'black',
  },
  block: {
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#272727',
  },
  seriesLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 8,
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  info: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default SeriesInfo;
