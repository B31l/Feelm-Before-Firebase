import React, {useState} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import NowList from '../../components/List/NowList';
import MyTabBacground from '../../components/Section/MyTabBackground';

function NowTab() {
  const now = [1, 2, 3, 4, 5];
  const background = {
    uri: 'https://img.freepik.com/premium-vector/red-curtain-with-light-stage-background_34926-462.jpg?w=826',
  };
  return (
    <>
      <ScreenHeader
        title="상영작"
        color="white"
        backgroundColor="transparent"
      />
      <MyTabBacground
        imageURL="https://img.freepik.com/premium-vector/red-curtain-with-light-stage-background_34926-462.jpg?w=826"
        height={320}
        opacity={0.5}
      />
      <GoSearch color="white" />
      <View style={styles.container}>
        <NowList propsRefer={now} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
});

export default NowTab;
