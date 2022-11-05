import React, {useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import SettingOption from '../../components/Section/SettingOption';

const optionData = [
  {
    toggleText: '동영상 자동 재생',
    toggleDescription:
      '5G/LTE 등의 환경에서는 데이터 요금이 발생할 수 있습니다.',
    toggleFunc: () => console.log('변경1'),
  },
  {
    toggleText: '청소년 보호',
    toggleDescription: '유해 콘텐츠를 차단합니다.',
    toggleFunc: () => console.log('변경2'),
  },
  {
    toggleText: '다크 모드',
    toggleDescription: '편안한 환경에서 시청합니다.',
    toggleFunc: () => console.log('변경3'),
  },
];

// 0. UI 그냥 핸드폰설정처럼 해도 직관적인거같음 토글바는 굳이? 다크모드같이 직관적인데에만 써도될듯
// 1. 시작화면 어디서시작할지 설정하는거랑 순서변경도 가능할덧?
// 2. 그머냐 제작자credit이랑 캐시삭제는 맨밑으로 이동, 저거사진도 대충 앱사진놓고 제작자랑 버전넣는거로 옮겨놓기
// 3. 알림설정(구독한 항목에 대한 알?림)
// 4. 위에 헤더크기좀 줄이기

const ITEM_HEIGHT = 64;

function SettingScreen({navigation}) {
  return (
    <>
      <ScreenHeader title="설정" />
      <GoBack />
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={optionData}
          getItemLayout={useCallback(
            (_, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            }),
            [],
          )}
          renderItem={({item}) => (
            <SettingOption
              toggleText={item.toggleText}
              toggleDescription={item.toggleDescription}
              toggleFunc={item.toggleFunc}
              // onValueChange={item.onValueChange}
            />
          )}
        />
        <View style={styles.separator} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 72,
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 16,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,
  },
  settingTitleText: {
    fontSize: 16,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 0,
  },

  separator: {
    height: 8,
    backgroundColor: '#eee',
  },
});

export default SettingScreen;
