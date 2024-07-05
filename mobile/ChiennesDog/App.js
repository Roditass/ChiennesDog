import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sesion from './screens/inicioSesion';
import Registro from './screens/registro';
import Recuperacion from './screens/recuperacionContrasena';
import Cambio from './screens/cambioContrasena';
import Navigation from './components/navigation/bottomNavigation';
import ProductoGale from './screens/productoGaleria';
import ProductoInfo from './screens/productoDetalle';
import Valoracion from './screens/valoracion';
import Carrito from './screens/carrito';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Sesion'
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Sesion" component={Sesion} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Recuperacion" component={Recuperacion} />
        <Stack.Screen name="Cambio" component={Cambio} />
        <Stack.Screen name="ProductoGale" component={ProductoGale} />
        <Stack.Screen name="ProductoInfo" component={ProductoInfo} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="Valoracion" component={Valoracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
