import React from 'react';
import {useWindowDimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {MenuInterno} from '../components/MenuInterno';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{
          headerStyle: {
            height: 35,
          },
        }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          headerStyle: {
            height: 35,
          },
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
