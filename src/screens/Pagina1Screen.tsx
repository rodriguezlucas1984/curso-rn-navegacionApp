import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';

const Pagina1Screen = ({navigation}: StackScreenProps<any, any>) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <View style={estilosLocales.contenedorBotones}>
        <TouchableOpacity
          style={styles.botonNavegacion}
          onPress={() => navigation.navigate('Pagina2Screen')}>
          <Text adjustsFontSizeToFit style={styles.botonNavegacionTexto}>
            Ir pagina 2
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Navegación con argumentos</Text>
      <View style={estilosLocales.contenedorBotones}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="body-outline" color="#FFF" size={35} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilosLocales.boton}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" color="#FFF" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 3,
              nombre: 'Luis',
            })
          }>
          <Icon name="body-outline" color="#FFF" size={35} />
          <Text style={styles.botonGrandeTexto}>Luis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;

const estilosLocales = StyleSheet.create({
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boton: {
    ...styles.botonGrande,
    backgroundColor: '#AF7AC5',
  },
});
