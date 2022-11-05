import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';

function SearchScreen() {
  return (
    <>
      <ScreenHeader title="검색" />
      <GoBack />
      <ScrollView style={styles.container}>
        <Text>ㅎㅇ</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});

export default SearchScreen;
