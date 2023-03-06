import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
//import {DrawerNavigator} from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
