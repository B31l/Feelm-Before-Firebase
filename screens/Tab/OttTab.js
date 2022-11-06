import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import MyTabBackground from '../../components/Section/MyTabBackground';
import OttTabNav from '../../components/Nav/OttTabNav';

import CustomSeries from '../../components/Section/CustomSeries';

function OttTab() {
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="시리즈"
        backgroundColor="transparent"
        color="white"
        align={false}
      />
      <GoSearch color="white" />
      <MyTabBackground
        imageURL="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        opacity={0.5}
        height={144}
      />
      <OttTabNav />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomSeries propsId={1} />
        <CustomSeries propsId={2} />
        <CustomSeries propsId={3} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  scrollView: {
    paddingBottom: 16,
  },
});

export default OttTab;