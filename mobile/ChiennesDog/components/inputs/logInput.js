import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

// Definición del componente funcional LogInput
export default function LogInput({ placeHolder, setValor, contra, setTextChange }) {
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={setValor}
        placeholderTextColor={'#828181'}
        secureTextEntry={contra}
        onChangeText={setTextChange}
      />
    </View>
  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
    inputConteiner:{
        backgroundColor: "#FFE6D5", // Color de fondo del contenedor del input
        padding: 12,                // Espaciado interno
        paddingLeft: 22,            // Espaciado interno a la izquierda
        borderRadius: 20,           // Bordes redondeados
        marginTop: "3%",            // Margen superior
        width: "90%",               // Ancho del contenedor (90% del contenedor padre)
        alignSelf: "center"         // Centrar el contenedor horizontalmente
    },
    input:{
        fontSize: 22,               // Tamaño de la fuente
        fontWeight: "medium",       // Grosor de la fuente (medio)
    },
});