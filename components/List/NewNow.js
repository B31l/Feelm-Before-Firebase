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
import LinearGradient from 'react-native-linear-gradient';

function NewNow({propsRefer}) {
  const navigation = useNavigation();
  const data = require('../../json/Movie.json').items.filter(item =>
    propsRefer.includes(item.id),
  );

  const width = Math.round(Dimensions.get('window').width);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.movieUlWrapper}
      onPress={() => navigation.navigate('MovieInfo', {propsId: item.id})}>
      <View style={{width}}>
        <Image style={styles.imageURL} source={{uri: item.imageURL}} />

        <View style={styles.textWrapper}>
          <Image
            style={styles.posterImageURL}
            source={{uri: item.posterImageURL}}
          />
          <Text style={{...styles.text, fontSize: 32, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <View style={styles.separator} />
          <Text style={{...styles.text, fontSize: 14}}>{item.summary}</Text>
          <Text style={{...styles.text, fontSize: 14, color: '#777'}}>
            {item.tag.join(' / ')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['transparent', 'transparent', '#151515']}>
      <FlatList
        data={data}
        renderItem={renderItem}
        decelerationRate="fast"
        snapToAlignment="start"
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  movieUlWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  imageURL: {
    width: '100%',
    height: '100%',
    opacity: 0.15,
  },
  posterImageURL: {
    width: 128,
    height: 144,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 400,
    marginTop: 400,
  },
  text: {
    color: 'white',
    width: '75%',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  separator: {
    width: '75%',
    marginTop: 8,
    borderColor: '#FFD63F',
    borderTopWidth: 1,
  },
});

export default NewNow;
