import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';

function AlertScreen() {
  const [data, setData] = useState('');
  axios
    .get('http://10.0.2.2:8080/search/%ED%86%A0%EB%A5%B4')
    .then(response => response.data._embedded.movieDataList)
    .then(response => response.map(item => item.movieTitle))
    .then(response => {
      // console.log(response);
      setData(response);
    });
  return (
    <>
      <ScreenHeader title="알림" />
      <GoBack />
      <ScrollView style={styles.container}>
        <Text>{data}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
});
export default AlertScreen;
