import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HorizontalMovieList from '../List/HorizontalMovieList';
function ChickenEggAndIcon({
  iconName,
  iconSize = 16,
  Color = 'white',
  head,
  body,
  movie,
  width,
}) {
  return (
    <>
      <View style={{...styles.container, width}}>
        <View style={styles.icon}>
          <Icon name={iconName} color={Color} size={iconSize} />
        </View>
        <Text style={styles.sectionHead}>{head}</Text>
        <Text style={styles.sectionBody}>{body}</Text>
      </View>
      <View>
        <HorizontalMovieList propsRefer={movie} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHead: {
    color: 'white',
    marginHorizontal: 13,
    fontSize: 12,
  },
  sectionBody: {
    color: 'white',

    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ChickenEggAndIcon;
