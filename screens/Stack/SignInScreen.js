import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feelm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
