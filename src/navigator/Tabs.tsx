import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';

export const Tabs = () => {
  if (Platform.OS === 'ios') {
    return <TabsIOS />;
  } else {
    return <TabsAndroid />;
  }
};

const BottomTabIOS = createBottomTabNavigator();

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      activeColor="orange"
      inactiveColor="grey"
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: props => {
          return <TabBarIconAndroid {...props} routeName={route.name} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: '',
        }}
        component={Tab1Screen}
      />

      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: ''}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: ''}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: '#FFF'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarItemStyle: {
          marginBottom: 10,
        },
        tabBarIcon: props => {
          return <TabBarIcon {...props} routeName={route.name} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

type TabBarIconProps = {
  routeName: string;
  focused: boolean;
  color: string;
  size?: number;
};

const TabBarIcon = ({routeName, color}: TabBarIconProps) => {
  let iconName: string = '';
  switch (routeName) {
    case 'Tab1Screen':
      iconName = 'T1';
      break;

    case 'TopTabNavigator':
      iconName = 'T2';
      break;

    case 'StackNavigator':
      iconName = 'Stack';
      break;
  }
  return <Text style={{color}}>{iconName}</Text>;
};

const TabBarIconAndroid = ({routeName, focused, color}: TabBarIconProps) => {
  let iconName: string = '';
  let text = '';
  switch (routeName) {
    case 'Tab1Screen':
      iconName = 'bandage-outline';
      text = 'T1';
      break;

    case 'TopTabNavigator':
      iconName = 'basketball-outline';
      text = 'T2';
      break;

    case 'StackNavigator':
      iconName = 'bookmarks-outline';
      text = 'Stack';
      break;
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: focused ? 45 : 40,
        height: focused ? 45 : 40,
      }}>
      <Icon
        name={iconName}
        size={focused ? 40 : 25}
        color={color}
        style={{bottom: focused ? 10 : 0}}
      />

      <Text
        style={{
          fontSize: 14,
          color,
          display: focused ? 'none' : 'flex',
        }}>
        {text}
      </Text>
    </View>
  );
};
