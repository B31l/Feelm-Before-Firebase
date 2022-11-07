import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NowTab from './Tab/NowTab';
import SeriesTab from './Tab/SeriesTab';
import ArchiveTab from './Tab/ArchiveTab';
import MyTab from './Tab/MyTab';

const Tab = createBottomTabNavigator();

function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#4287f5',
    tabBarInactiveTintColor: 'white',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 40,
      marginTop: -8,
      paddingHorizontal: 32,
      backgroundColor: 'black',
    },
    tabBarShowLabel: false,
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
        options={headerOptions('inventory')}
      />
      <Tab.Screen
        name="MY"
        component={MyTab} //
        options={headerOptions('person')}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
