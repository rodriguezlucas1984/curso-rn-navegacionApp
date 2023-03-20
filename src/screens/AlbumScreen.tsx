import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {authState, logout} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.subTitle}>AlbumScreen</Text>
      {authState.isLogin && (
        <TouchableOpacity onPress={() => logout()} style={styles.botonLogout}>
          <Text style={styles.textoBotonLog}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
