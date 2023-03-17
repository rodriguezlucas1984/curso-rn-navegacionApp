import React from 'react';
import {useWindowDimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {SettingsScreen} from '../screens/SettingsScreen';
import {MenuInterno} from '../components/MenuInterno';
import {Tabs} from './Tabs';
import {colors} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerTintColor: colors.primary,
        title: '',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="Tabs"
        options={{
          headerStyle: {
            height: 35,
          },
        }}
        component={Tabs}
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
