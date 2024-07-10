import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

// Definición del componente funcional TelefonoInput
export default function TelefonoInput({
    placeHolder,   // Propiedad para el placeholder del TextInput
    setValor,      // Valor del TextInput
    contra,        // Booleano para mostrar el texto como contraseña
    setTextChange, // Función para manejar el cambio de texto
    texto,         // Texto opcional a mostrar arriba del TextInput
    bloqueado,     // Booleano para determinar si el TextInput está editable
}) {
    // Estado para manejar el mensaje de error
    const [errorMessage, setErrorMessage] = useState("");
    // Función para manejar el cambio de texto en el TextInput
    const handleTextChange = (text) => {
        const cleanedText = text.replace(/[^0-9-]/g, "");

        // Insertar el guion automáticamente después de los primeros 4 dígitos
        if (cleanedText.length === 5 && !cleanedText.includes('-')) {
            text = cleanedText.slice(0, 4) + '-' + cleanedText.slice(4);
        }

        // Validar que el primer carácter sea 2, 6 o 7
        if (cleanedText.length > 0 && !/^[267]/.test(cleanedText[0])) {
            setErrorMessage(
                "El número de teléfono debe comenzar con 2, 6 o 7."
            );
            return;
        }

        // Validar el patrón completo
        const phonePattern = /^[267]\d{3}-\d{4}$/;
        if (phonePattern.test(text) || text === '') {
            setErrorMessage("");
        } else {
            setErrorMessage(
                "Número de teléfono no válido. Debe seguir el formato ####-####."
            );
        }
        setTextChange(text);
    };
    return (
        <View style={styles.inputConteiner}>
            {texto ? <Text style={styles.texto}>{texto}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={setValor}
                placeholderTextColor={"#828181"}
                secureTextEntry={contra}
                onChangeText={handleTextChange}
                editable={!bloqueado} // Establece si el TextInput es editable según la propiedad bloqueado
                keyboardType="numeric" // Cambia el teclado a numérico
                maxLength={9} // Limita la cantidad de caracteres a 9 (xxxx-xxxx)
            />
            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}
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
        marginVertical: "7%", // Margen vertical
    },
    input: {
        fontSize: 22, // Tamaño de la fuente
        fontWeight: "medium", // Grosor de la fuente (medio)
    },
});
