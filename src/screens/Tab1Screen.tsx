import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import TouchableIcon from '../components/TouchableIcon';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  const {changeFavoriteIcon} = useContext(AuthContext);

  useEffect(() => {
    console.log('Tab1Screen effect ');
  });

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon
          iconName="airplane-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('airplane-outline')}
        />
        <TouchableIcon
          iconName="attach-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('attach-outline')}
        />
        <TouchableIcon
          iconName="bonfire-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('bonfire-outline')}
        />
        <TouchableIcon
          iconName="chatbubble-ellipses-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('chatbubble-ellipses-outline')}
        />
        <TouchableIcon
          iconName="images-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('images-outline')}
        />
        <TouchableIcon
          iconName="leaf-outline"
          iconSize={70}
          onClick={() => changeFavoriteIcon('leaf-outline')}
        />
      </Text>
    </View>
  );
};
