import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

function VerticalMovieList({data, width = 64, height = 64, borderRadius = 8}) {
  // const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{...styles.movieUlWrapper, height: height + 8}}
      // onPress={() => navigation.navigate('MovieInfo', {propsId: item.id})}
    >
      <View style={{...styles.movieUl, width, height, borderRadius}}>
        <Image
          style={{...styles.movieLi, borderRadius}}
          source={{uri: item.movieImg}}
        />
      </View>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 16, color: 'black'}}>{item.movieTitle}</Text>
        {/* <Text style={{fontSize: 12}}>{item.tag.join(' / ')}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 0,
    backgroundColor: 'transparent',
  },
  movieUlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieUl: {
    marginRight: 16,
  },
  movieLi: {
    width: '100%',
    height: '100%',
  },
});

export default VerticalMovieList;
