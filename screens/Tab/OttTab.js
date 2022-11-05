import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import MyTabBackground from '../../components/Section/MyTabBackground';
import OttTabNav from '../../components/Nav/OttTabNav';

function OttTab() {
  return (
    <>
      <ScreenHeader
        title="OTT"
        backgroundColor="transparent"
        color="white"
        align={false}
      />
      <GoSearch color="white" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <MyTabBackground
          imageURL="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          opacity={0.5}
          height={240}
          marginBottom={-80}
        />
        <OttTabNav />
        <View
          style={{
            height: 240,
            marginHorizontal: 16,
            borderRadius: 8,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 24}}>전광판</Text>
        </View>
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

export default OttTab;
