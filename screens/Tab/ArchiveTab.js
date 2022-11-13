import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useState} from 'react';

import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import BlockTitle from '../../components/Section/BlockTitle';
import ChickenEggAndIcon from '../../components/Section/ChickenEggAndICon';
import Profile from '../../components/Section/Profile';

const MyData = require('../../json/My.json');

// 수정 완
function ArchiveTab() {
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 80 ? setIsTop(true) : setIsTop(false);
  };
  const my = MyData;
  return (
    <ScrollView>
      <ScreenHeader title="보관함" />
      <GoSearch />
      <View style={styles.container}>
        <Profile visibility={isTop ? true : false} name={my.name} />
        <BlockTitle left="내 영화" right="최근 기록" icon="history" />
        <View style={{justifyContent: 'center', paddingLeft: 16}}>
          <ChickenEggAndIcon
            iconName="favorite"
            Color="#FFD63F"
            head="좋아요"
            body={my.like.movie.length}
            movie={my.like.movie}
            width="30%"
          />
          <ChickenEggAndIcon
            iconName="bookmark"
            Color="#FFD63F"
            head="봤어요"
            body={my.watchedMovie.length}
            movie={my.watchedMovie}
            width="30%"
          />
          <ChickenEggAndIcon
            iconName="visibility"
            Color="#FFD63F"
            head="보고 싶어요"
            body={my.wantowatch.length}
            movie={my.wantowatch}
            width="30%"
          />
        </View>
        <BlockTitle left="내 시리즈" right="생성" icon="add" />
        <View style={{...styles.block, flex: 1}}>
          <Text>시리즈 리스트</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: 'black',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  block: {
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 5,
  },
});
export default ArchiveTab;
