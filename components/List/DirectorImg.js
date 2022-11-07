import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const DirectorData = require('../../json/Director.json').items;

const DirectorImg = ({propsRefer}) => {
  const navigation = useNavigation();
  const director = DirectorData.filter(item => item.id === propsRefer)[0];
  return (
    <View>
      <Text>{director.name}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DirectorInfo', {propsId: director.id})
        }>
        <Image style={styles.image} source={{uri: director.imageURL}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 64,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default DirectorImg;
