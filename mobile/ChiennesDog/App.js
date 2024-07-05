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
