import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';

function Filter() {
  const cat1 = ['전체', '시리즈', '배우', '감독'];
  return (
    <View style={styles.seriesTabNav}>
      <View style={styles.selectDropdownWrapper}>
        <SelectDropdown
          data={cat1}
          defaultValueByIndex={1}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonStyle={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 128,
            height: 36,
            borderColor: 'white',
            backgroundColor: 'transparent',
            // borderWidth: 1,
            // borderTopLeftRadius: 8,
            // borderTopRightRadius: 8,
          }}
          buttonTextStyle={{
            fontSize: 16,
            color: 'white',
            opacity: 0,
          }}
          rowStyle={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: 128,
            height: 32,
            paddingVertical: 4,
            backgroundColor: 'transparent',
          }}
          rowTextStyle={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          selectedRowStyle={{
            backgroundColor: '#EBA937',
          }}
          renderDropdownIcon={() => (
            <Icon name="filter-alt" size={24} color="white" />
          )}
          statusBarTranslucent={true}
          dropdownStyle={{
            alignItems: 'flex-start',
            marginTop: -2,
            backgroundColor: 'white',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
          dropdownOverlayColor="transparent"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seriesTabNav: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 64,
  },
  selectDropdownWrapper: {
    marginLeft: 8,
  },
});

export default Filter;
