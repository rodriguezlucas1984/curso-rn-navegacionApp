import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const ContactsScreen = () => {
  const {authState, singIn} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.subTitle}>ContactScreen</Text>
      {!authState.isLogin && (
        <TouchableOpacity onPress={() => singIn()} style={styles.botonSingIn}>
          <Text style={styles.textoBotonLog}>Singin</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
