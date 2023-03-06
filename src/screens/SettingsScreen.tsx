import {View, Text} from 'react-native';
import React from 'react';

import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 5}}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};
