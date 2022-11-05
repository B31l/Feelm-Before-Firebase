import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import MyTabHeader from '../../components/Header/MyTabHeader';
import MyTabBacground from '../../components/Section/MyTabBackground';
import Profile from '../../components/Section/Profile';
import TutorialInterest from '../../components/Section/TutorialInterest';

function MyTab() {
  const name = '정말고마워요';
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 80 ? setIsTop(true) : setIsTop(false);
  };

  return (
    <>
      <MyTabHeader visibility={isTop ? false : true} title={name} />
      <ScrollView
        style={styles.container}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}>
        <MyTabBacground
          imageURL="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23298a55526729.5988857400116.jpg"
          visibility={isTop ? true : false}
          marginBottom={160}
        />
        <Profile visibility={isTop ? true : false} name={name} />
        <TutorialInterest message="Feelm이 처음이라면 관심사를 설정해 보세요." />
        <View style={{height: 320}} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
export default MyTab;
