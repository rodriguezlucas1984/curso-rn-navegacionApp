import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

const PersonaScreen = ({
  route,
}: StackScreenProps<RootStackParams, 'PersonaScreen'>) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonaScreen</Text>
      <Text style={styles.personaTextJSON}>
        {JSON.stringify(route.params, undefined, 3)}
      </Text>
    </View>
  );
};

export default PersonaScreen;
