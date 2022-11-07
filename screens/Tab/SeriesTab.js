import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import MyTabBackground from '../../components/Section/MyTabBackground';
import CustomSeries from '../../components/Section/CustomSeries';
import Filter from '../../components/Section/Filter';

function SeriesTab() {
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="시리즈"
        backgroundColor="transparent"
        color="white"
      />
      <GoSearch color="white" />
      {/* <Filter /> */}
      <MyTabBackground
        imageURL="https://img.freepik.com/free-vector/yellow-hexagonal-honeycomb-mesh-pattern-with-text-space_1017-26292.jpg?w=740&t=st=1667800544~exp=1667801144~hmac=645ca6cd759fd1fbd7c56a0f0adaae0a32b5636ff27af1527f3aba64daa9124b"
        opacity={0.5}
        height={80}
      />

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
    marginVertical: 8,
  },
});

export default SeriesTab;
