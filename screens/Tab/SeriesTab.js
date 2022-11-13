import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import CustomSeries from '../../components/Section/CustomSeries';

// 수정 완
function SeriesTab() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="시리즈" />
      <GoSearch color="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
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
    backgroundColor: 'black',
    paddingTop: 80,
  },
});

export default SeriesTab;
