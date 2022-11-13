import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

// 수정 완
const DirectorData = require('../../json/Director.json').items;

const DirectorImg = ({propsRefer}) => {
  const navigation = useNavigation();
  const director = DirectorData.filter(item => item.id === propsRefer)[0];
  return (
    <View style={{alignItems: 'flex-start'}}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DirectorInfo', {propsId: director.id})
          }>
          <Image style={styles.image} source={{uri: director.imageURL}} />
        </TouchableOpacity>
        <Text style={styles.text}>{director.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 64,
    height: 64,
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default DirectorImg;
