import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';

export const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar  */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://st4.depositphotos.com/14903220/22197/v/950/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg',
          }}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={localStyles.opcionMenu}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={23} color="#000" />
          <Text style={styles.menuTexto}> Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.opcionMenu}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={23} color="#000" />
          <Text style={styles.menuTexto}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const localStyles = StyleSheet.create({
  opcionMenu: {
    ...styles.menuBoton,
    flexDirection: 'row',
  },
});
