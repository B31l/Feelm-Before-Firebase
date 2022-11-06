import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';

import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import BlockTitle from '../../components/Section/BlockTitle';
import ChickenEggAndIcon from '../../components/Section/ChickenEggAndICon';

function ArchiveTab() {
  return (
    <>
      <ScreenHeader
        title="보관함"
        align={false}
        backgroundColor="transparent"
      />
      <GoSearch />
      <ImageBackground
        style={styles.container}
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/02/65/60/74/1000_F_265607460_VhXH0279jWzfZjDZO2mw1sEzb5ZsYrjt.jpg',
        }}>
        <BlockTitle left="내 영화" right="최근 기록" icon="history" />
        <View style={{...styles.block, height: 160}}>
          <ChickenEggAndIcon
            iconName="favorite"
            iconBackgroundColor="#ff8080"
            head="좋아요"
            body="6"
            width="30%"
          />
          <ChickenEggAndIcon
            iconName="bookmark"
            iconBackgroundColor="#ffd280"
            head="봤어요"
            body="24"
            width="30%"
          />
          <ChickenEggAndIcon
            iconName="visibility"
            iconBackgroundColor="#8080ff"
            head="보고 싶어요"
            body="1"
            width="30%"
          />
        </View>
        <BlockTitle left="내 시리즈" right="생성" icon="add" />
        <View style={{...styles.block, flex: 1}}>
          <Text>시리즈 리스트</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    // marginTop: 64,
    paddingTop: 80,
    backgroundColor: '#eee',
  },

  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default ArchiveTab;
