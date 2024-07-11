import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from 'react';

// Definición del componente funcional ProInput
export default function ProInput({
    placeHolder,   // Propiedad para el placeholder del TextInput
    setValor,      // Valor del TextInput
    contra,        // Booleano para mostrar el texto como contraseña
    setTextChange, // Función para manejar el cambio de texto
    texto,         // Texto opcional a mostrar arriba del TextInput
    bloqueado,     // Booleano para determinar si el TextInput está editable
}) {
    return (
        <View style={styles.inputConteiner}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>{texto}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={setValor}
                placeholderTextColor={"#828181"}
                secureTextEntry={contra}
                onChangeText={setTextChange}
                editable={!bloqueado} // Establece si el TextInput es editable según la propiedad bloqueado
            />
        </View>
    );
}

// Creación de los estilos para los componentes
const styles = StyleSheet.create({
    inputConteiner: {
        backgroundColor: "#FFE6D5", // Color de fondo del contenedor del input
        padding: 12, // Espaciado interno
        paddingLeft: 22, // Espaciado interno a la izquierda
        borderRadius: 20, // Bordes redondeados
        marginTop: "1%", // Margen superior
        width: "90%", // Ancho del contenedor (90% del contenedor padre)
        alignSelf: "center", // Centrar el contenedor horizontalmente
    },
    input: {
        fontSize: 22, // Tamaño de la fuente
        fontWeight: "medium", // Grosor de la fuente (medio)
    },
});
