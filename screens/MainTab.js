import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SeriesTab from './Tab/SeriesTab';
import OttTab from './Tab/OttTab';
import CommunityTab from './Tab/CommunityTab';
import ArchiveTab from './Tab/ArchiveTab';
import MyTab from './Tab/MyTab';

const Tab = createBottomTabNavigator();

function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#4287f5',
    tabBarInactiveTintColor: '#333',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 40,
      // borderTopWidth: 1,
      paddingHorizontal: 32,
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
        component={SeriesTab}
        options={headerOptions('style')}
      />
      <Tab.Screen
        name="OTT" //
        component={OttTab}
        options={headerOptions('tv')}
      />
      <Tab.Screen
        name="커뮤니티"
        component={CommunityTab}
        options={headerOptions('explore')}
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
