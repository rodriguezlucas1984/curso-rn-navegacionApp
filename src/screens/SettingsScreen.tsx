import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors, styles} from '../theme/appTheme';

import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 5}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
