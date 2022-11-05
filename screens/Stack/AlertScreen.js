import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';

function AlertScreen() {
  return (
    <>
      <ScreenHeader title="알림" />
      <GoBack />
      <ScrollView>
        <Text />
      </ScrollView>
    </>
  );
}

export default AlertScreen;
