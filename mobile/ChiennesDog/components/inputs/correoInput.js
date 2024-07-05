import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from 'react';

export default function CorreoInput({
    placeHolder,
    setValor,
    contra,
    setTextChange,
    texto,
    bloqueado,  
}) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const validarCorreo = (correo) => {
        // Expresión regular para validar correo electrónico
        const re = /\S+@\S+\.\S+/;
        return re.test(correo);
    };

    const handleTextChange = (texto) => {
        const hasUpperCase = /[A-Z]/.test(texto);
        if (hasUpperCase) {
            setErrorMessage('No se permiten mayúsculas');
        } else {
        setEmail(texto);
        if (!validarCorreo(texto)) {
            setErrorMessage('Correo electrónico no válido');
        } else {
            setErrorMessage('');
        }
        setTextChange(texto); }
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

const styles = StyleSheet.create({
    inputConteiner: {
        backgroundColor: "#FFE6D5",
        padding: 12,
        paddingLeft: 22,
        borderRadius: 20,
        marginTop: "1%",
        width: "90%",
        alignSelf: "center",
    },
    input: {
        fontSize: 22,
        fontWeight: "medium",
    },
});
