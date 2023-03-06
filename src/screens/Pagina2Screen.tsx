import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

const Pagina2Screen = ({navigation}: StackScreenProps<any, any>) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Atras',
      headerBackTitle: 'Atras', //titulo para regresar a la pagina anterior en ios
      headerStyle: {
        height: 40,
      },
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <View style={estilosLocales.contenedorBotones}>
        <TouchableOpacity
          style={styles.botonNavegacion}
          onPress={() => navigation.navigate('Pagina3Screen')}>
          <Text adjustsFontSizeToFit style={styles.botonNavegacionTexto}>
            Ir pagina 3
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina2Screen;
const estilosLocales = StyleSheet.create({
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
