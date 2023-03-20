import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
//import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from './src/theme/appTheme';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <AppState>
          {/* <DrawerNavigator /> */}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
