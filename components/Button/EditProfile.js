import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function EditProfile() {
  return (
    <View style={styles.editWrapper}>
      <Icon name="edit" color="black" size={16} />
      <Text style={styles.editText}>편집</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
export default EditProfile;
