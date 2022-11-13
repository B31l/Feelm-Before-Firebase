import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Tab */
import MainTab from './MainTab';

/* Info */
import ActorInfo from './Info/ActorInfo';
import DirectorInfo from './Info/DirectorInfo';
import MovieInfo from './Info/MovieInfo';
import SeriesInfo from './Info/SeriesInfo';

/* Stack */
import AlertScreen from './Stack/AlertScreen';
import SearchScreen from './Stack/SearchScreen';
import SettingScreen from './Stack/SettingScreen';

/* Sign */
import SignInScreen from './Stack/SignInScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Alert"
        component={AlertScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ActorInfo"
        component={ActorInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DirectorInfo"
        component={DirectorInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeriesInfo"
        component={SeriesInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
