import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
//import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from './src/theme/appTheme';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <MenuLateral />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
