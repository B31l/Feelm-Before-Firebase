import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import SeriesTabNav from '../../components/Nav/SeriesTabNav';
import GoSearch from '../../components/Button/GoSearch';
import NowInTheatersSeries from '../../components/Section/NowInTheatersSeries';
import CustomSeries from '../../components/Section/CustomSeries';

function SeriesTab() {
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 160 ? setIsTop(true) : setIsTop(false);
  };

  return (
    <>
      <SeriesTabNav visibility={isTop ? false : true} />
      <GoSearch color={isTop ? 'white' : '#333'} />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <NowInTheatersSeries />
        <CustomSeries propsId={1} />
        <CustomSeries propsId={2} />
        <CustomSeries propsId={3} />
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

export default SeriesTab;
