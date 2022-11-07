import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Button/GoBack';
import VerticalMovieList from '../../components/List/VerticalMovieList';

const MovieData = require('../../json/Movie.json').items;

function SearchScreen() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {
    if (text.trim() === '') {
      setList([]);
      return;
    }
    const movieList = MovieData.filter(item => item.name.includes(text)).map(
      item => item.id,
    );
    setList(movieList);
  }, [text]);

  return (
    <>
      <ScreenHeader backgroundColor="#eee" />
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={foo => {
            setText(foo);
          }}
          placeholder="제목으로 영화 검색"
        />
      </View>

      <GoBack />
      <View style={styles.container}>
        <View style={styles.result}>
          <Text
            style={{...styles.resultText, opacity: list.length === 0 ? 0 : 1}}>
            {list.length}건의 검색 결과
          </Text>
          <VerticalMovieList propsRefer={list} />
        </View>
        <View style={{...styles.noResult, opacity: list.length === 0 ? 1 : 0}}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/3692/PNG/512/emoji_cat_icon_229589.png',
              }}
            />
          </View>
          <Text>검색 결과가 없습니다.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
  result: {
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 8,
  },
  resultText: {
    width: '50%',
    marginVertical: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
    textAlign: 'center',
  },
  noResult: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textInputWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 32,
    width: '100%',
    paddingLeft: 48,
    paddingRight: 16,
  },
  textInput: {
    width: '100%',
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  imageWrapper: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  image: {
    opacity: 0.5,
    width: '100%',
    height: '100%',
  },
});

export default SearchScreen;
