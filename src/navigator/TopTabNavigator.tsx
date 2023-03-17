import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AlbumScreen} from '../screens/AlbumScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: '#FFF'}}
      screenOptions={({route}) => {
        return {
          tabBarPressColor: colors.primary,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
          },
          tabBarStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          tabBarIcon: props => <TabBarIcon {...props} routeName={route.name} />,
        };
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

interface ITabBarIconProps {
  routeName: string;
  focused: boolean;
  color: string;
}

const TabBarIcon = ({color, focused, routeName}: ITabBarIconProps) => {
  let iconName = '';
  switch (routeName) {
    case 'Chat':
      iconName = 'chatbox-ellipses-outline';
      break;
    case 'Contacts':
      iconName = 'people-outline';
      break;
    case 'Album':
      iconName = 'albums-outline';
      break;
  }
  return (
    <Icon
      name={iconName}
      size={focused ? 25 : 20}
      color={!focused ? color : colors.primary}
      style={{bottom: focused ? 5 : 0}}
    />
  );
};
