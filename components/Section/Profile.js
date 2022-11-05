import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import EditProfile from '../Button/EditProfile';
import ProfileMenuLike from './ProfileMenuLike';
import GoAlertAndSetting from '../Button/GoAlertAndSetting';

const MyData = require('../../json/My.json');

function Profile({visibility, name}) {
  return (
    <View style={styles.container}>
      <View
        style={{...styles.profileImageWrapper, opacity: visibility ? 1 : 0}}>
        <Image
          style={styles.profileImage}
          source={{uri: MyData.profileImageURL}}
        />
      </View>
      <View style={styles.profileNameWrapper}>
        <Text style={styles.profileName}>{name}</Text>
      </View>
      <ProfileMenuLike
        movie={MyData.like.movie.length}
        series={MyData.like.series.length}
        actor={MyData.like.actor.length}
        director={MyData.like.director.length}
      />
      <EditProfile />
      <View style={styles.isTopWrapper}>
        <GoAlertAndSetting color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    marginTop: 160,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    marginTop: -60,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#eee',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profileNameWrapper: {
    width: 320,
    height: 80,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileName: {
    color: 'black',
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
    color: 'black',
    fontSize: 12,
    width: 32,
    textAlign: 'center',
  },
  isTopWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: -36,
    right: -8,
    width: 80,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Profile;
