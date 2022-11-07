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
  const background = {
    uri: 'https://img.freepik.com/free-vector/grey-geometric-background-design_1055-3183.jpg?w=740&t=st=1667803093~exp=1667803693~hmac=efdbd10b9842aafa83739e696c0f0d8c866ac64f5773c097af67ca796eef8339',
  };
  return (
    <>
      <ScreenHeader title="보관함" backgroundColor="transparent" />
      <GoSearch />
      <ImageBackground style={styles.container} source={background}>
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
  container: {
    flex: 1,
    paddingTop: 80,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 5,
  },
});

export default ArchiveTab;
