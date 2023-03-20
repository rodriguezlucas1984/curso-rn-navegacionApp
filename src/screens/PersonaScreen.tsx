import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

const PersonaScreen = ({
  route,
}: StackScreenProps<RootStackParams, 'PersonaScreen'>) => {
  const {
    changeUserName,
    authState: {username},
  } = useContext(AuthContext);
  const {
    params: {nombre},
  } = route;

  useEffect(() => {
    if (nombre === username) {
      return;
    }
    changeUserName(nombre);
  });

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
