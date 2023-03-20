import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';

const Pagina3Screen = ({navigation}: StackScreenProps<any, any>) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <View style={estilosLocales.contenedorBotones}>
        <TouchableOpacity
          style={styles.botonNavegacion}
          onPress={() => navigation.pop()}>
          <Text adjustsFontSizeToFit style={styles.botonNavegacionTexto}>
            Regresa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonNavegacion}
          onPress={() => navigation.popToTop()}>
          <Text adjustsFontSizeToFit style={styles.botonNavegacionTexto}>
            Ir pagina 1
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina3Screen;

const estilosLocales = StyleSheet.create({
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
