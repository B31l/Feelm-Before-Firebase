import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NowTab from './Tab/NowTab';
import SeriesTab from './Tab/SeriesTab';
import ArchiveTab from './Tab/ArchiveTab';

const Tab = createBottomTabNavigator();

function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#FFD63F',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 48,
      marginTop: -8,
      paddingHorizontal: 32,
      backgroundColor: 'black',
      borderTopWidth: 0,
    },
    // tabBarShowLabel: false,
  };

  const headerOptions = iconName => ({
    headerShown: false,
    tabBarIcon: ({color, size}) => (
      <Icon name={iconName} color={color} size={size} />
    ),
  });

  return (
    <Tab.Navigator initialRouteName="시리즈" screenOptions={screenOptions}>
      <Tab.Screen
        name="시리즈"
        component={NowTab}
        options={headerOptions('tv')}
      />
      <Tab.Screen
        name="OTT" //
        component={SeriesTab}
        options={headerOptions('style')}
      />
      <Tab.Screen
        name="보관함"
        component={ArchiveTab}
        options={headerOptions('person')}
      />
      {/* <Tab.Screen
        name="MY"
        component={MyTab} //
        options={headerOptions('person')}
      /> */}
    </Tab.Navigator>
  );
}

export default MainTab;
