import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect ');
  });
  return (
    <View>
      <Text style={styles.title}>Tab2Screen</Text>
    </View>
  );
};
