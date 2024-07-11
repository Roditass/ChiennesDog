import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

// Definición del componente funcional ContraInput
export default function ContraInput({
    placeHolder,   // Placeholder para el TextInput
    setValor,      // Valor del TextInput
    contra,        // Booleano para mostrar el texto como contraseña
    setTextChange, // Función para manejar el cambio de texto
    texto,         // Texto opcional a mostrar arriba del TextInput
    bloqueado,     // Booleano para determinar si el TextInput está editable
    maxLength,     // Longitud máxima del texto en el TextInput
}) {
    // Estado para manejar el mensaje de error
    const [errorMessage, setErrorMessage] = useState("");

    // Función para manejar el cambio de texto en el TextInput
    const handleChangeText = (text) => {
        // Validar longitud mínima
        if (text.length < 6) {
            setErrorMessage("Debe tener al menos 6 caracteres.");
        } else {
            // Validar mayúscula, número y caracter especial
            const uppercaseRegex = /[A-Z]/;
            const numberRegex = /[0-9]/;
            const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
            
            if (!uppercaseRegex.test(text)) {
                setErrorMessage("Debe contener al menos una mayúscula.");
            } else if (!numberRegex.test(text)) {
                setErrorMessage("Debe contener al menos un número.");
            } else if (!specialCharRegex.test(text)) {
                setErrorMessage("Debe contener al menos un caracter especial.");
            } else {
                setErrorMessage(""); // Texto válido
            }
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
                onChangeText={handleChangeText}
                editable={!bloqueado} // Establece si el TextInput es editable según la propiedad bloqueado
                maxLength={maxLength}
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
