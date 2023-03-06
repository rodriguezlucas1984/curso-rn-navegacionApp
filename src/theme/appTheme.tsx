import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
  },
  subTitle: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'purple',
    fontWeight: '800',
  },
  botonNavegacion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: 'blue',
  },
  botonNavegacionTexto: {
    fontSize: 18,
    color: '#FFF',
  },

  botonGrande: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
    width: 100,
    height: 100,
    backgroundColor: '#059EAB',
  },
  botonGrandeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  personaTextJSON: {
    marginRight: 30,
    fontSize: 25,
    color: '#000',
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    padding: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: '#BBB',
    borderWidth: 2,
  },
  menuContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  menuBoton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
});