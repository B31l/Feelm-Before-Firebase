import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import GoAlertAndSetting from '../Button/GoAlertAndSetting';
import ImageModal from 'react-native-image-modal';
// 수정 완
// 행으로 프로필
const MyData = require('../../json/My.json');

function Profile({visibility, name}) {
  return (
    <View style={styles.container}>
      <View
        style={{...styles.profileImageWrapper, opacity: visibility ? 1 : 0}}>
        <ImageModal
          style={styles.profileImage}
          source={{uri: MyData.profileImageURL}}
        />
      </View>
      <View style={styles.profileNameWrapper}>
        <Text style={styles.profileName}>{name}</Text>
      </View>
      {/* <ProfileMenuLike
        movie={MyData.like.movie.length}
        series={MyData.like.series.length}
        actor={MyData.like.actor.length}
        director={MyData.like.director.length}
      /> */}
      {/* <EditProfile /> */}
      <View style={styles.isTopWrapper}>
        <GoAlertAndSetting color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // position: 'absolute',
    // zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    marginTop: 50,
    marginHorizontal: 16,
    // backgroundColor: 'black',
    borderRadius: 8,
    elevation: 5,
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  profileNameWrapper: {
    width: 200,
    height: 80,
    paddingBottom: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  profileName: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  editWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 8,
    right: 8,
    width: 64,
    height: 24,
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  editText: {
    color: 'white',
    fontSize: 12,
    width: 32,
    textAlign: 'center',
  },
  isTopWrapper: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    top: -36,
    left: -8,
    width: 80,
    height: 32,
    flexDirection: 'row',
  },
});

export default Profile;
