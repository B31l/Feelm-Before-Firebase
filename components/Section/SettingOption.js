import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

function SettingOption({toggleText, toggleDescription}) {
  const [state, setState] = useState(false);
  const containerStyle = {
    width: 64,
    height: 24,
    borderRadius: 25,
    padding: 5,
  };
  const circleStyle = {
    width: 20,
    height: 20,
    borderRadius: 20,
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.toggleText]}>{toggleText}</Text>
        <SwitchToggle
          switchOn={state}
          onPress={() => {
            console.log(`${state} => ${!state}`);
            setState(!state);
          }}
          containerStyle={containerStyle}
          circleStyle={circleStyle}
        />
      </View>
      <View>
        <Text style={[styles.toggleDescription]}>{toggleDescription}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  top: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  toggleText: {
    fontSize: 16,
    color: '#151515',
  },
  toggleDescription: {
    fontSize: 12,
    color: '#333',
  },
});

export default SettingOption;
