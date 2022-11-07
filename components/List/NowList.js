import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function NowList({propsRefer, gap = 32, offset = 16, height = 240}) {
  const navigation = useNavigation();
  const data = require('../../json/Movie.json').items.filter(item =>
    propsRefer.includes(item.id),
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  const width = screenWidth - (gap + offset) * 2;
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.movieUlWrapper}
      onPress={() => navigation.navigate('MovieInfo', {propsId: item.id})}>
      <View style={{...styles.movieUl, width, height}}>
        <Image style={styles.movieLi} source={{uri: item.imageURL}} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={{...styles.text, fontSize: 24, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{...styles.text, fontSize: 16}}>
          {item.tag.join(' / ')}
        </Text>
      </View>
      <View style={styles.summaryWrapper}>
        <Text style={{...styles.text, fontSize: 14}}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        snapToInterval={width + gap}
        snapToAlignment="start"
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: -160,
  },
  movieUlWrapper: {
    alignItems: 'center',
    color: 'white',
    // backgroundColor: 'red',
    height: 480,
  },
  movieUl: {
    marginHorizontal: 16,
    elevation: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  movieLi: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  text: {
    color: 'white',
  },
  summaryWrapper: {
    borderColor: 'white',
    borderTopWidth: 1,
    width: 240,
    height: 160,
  },
});

export default NowList;
