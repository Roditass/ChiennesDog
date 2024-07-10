import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from 'react';

// Definición del componente funcional CorreoInput
export default function CorreoInput({
    placeHolder,   // Propiedad para el placeholder del TextInput
    setValor,      // Valor del TextInput
    contra,        // Booleano para mostrar el texto como contraseña
    setTextChange, // Función para manejar el cambio de texto
    texto,         // Texto opcional a mostrar arriba del TextInput
    bloqueado,     // Booleano para determinar si el TextInput está editable
}) {
    // Estado para manejar el valor del correo electrónico
    const [email, setEmail] = useState('');
    // Estado para manejar el mensaje de error
    const [errorMessage, setErrorMessage] = useState("");
    // Función para validar el formato del correo electrónico usando una expresión regular
    const validarCorreo = (correo) => {
        // Expresión regular para validar correo electrónico
        const re = /\S+@\S+\.\S+/;
        // Retorna true si el correo es válido, de lo contrario false
        return re.test(correo);
    };
    // Función para manejar el cambio de texto en el TextInput
    const handleTextChange = (texto) => {
        // Verifica si el texto contiene letras mayúsculas
        const hasUpperCase = /[A-Z]/.test(texto);
        if (hasUpperCase) {
            setErrorMessage('No se permiten mayúsculas'); // Establece un mensaje de error si hay mayúsculas
        } else {
        // Actualiza el estado del correo electrónico
        setEmail(texto);
        if (!validarCorreo(texto)) {
            setErrorMessage('Correo electrónico no válido'); // Establece un mensaje de error si el correo no es válido
        } else {
            setErrorMessage(''); // Limpia el mensaje de error si el correo es válido
        }
        setTextChange(texto); // Llama a la función setTextChange con el texto actualizado
        }
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
                maxLength={100}
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
