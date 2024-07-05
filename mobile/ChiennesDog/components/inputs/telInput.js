import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

export default function TelefonoInput({
    placeHolder,
    setValor,
    contra,
    setTextChange,
    texto,
    bloqueado,
}) {
    const [errorMessage, setErrorMessage] = useState("");
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
