import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styles} from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect ');
  });

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={70} color={colors.primary} />
        <Icon name="attach-outline" size={70} color={colors.primary} />
        <Icon name="bonfire-outline" size={70} color={colors.primary} />
        <Icon
          name="chatbubble-ellipses-outline"
          size={70}
          color={colors.primary}
        />
        <Icon name="images-outline" size={70} color={colors.primary} />
        <Icon name="leaf-outline" size={70} color={colors.primary} />
      </Text>
    </View>
  );
};
