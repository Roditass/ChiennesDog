import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

export default function DuiInput({
    placeHolder,
    setValor,
    contra,
    setTextChange,
    texto,
    bloqueado,
}) {
    const [errorMessage, setErrorMessage] = useState("");
    const handleTextChange = (text) => {
        // Limpiar el texto de caracteres no deseados
        const cleanedText = text.replace(/[^0-9-]/g, "");
        
         // Insertar el guion automáticamente después de los primeros 8 dígitos
         if (cleanedText.length > 8 && !cleanedText.includes('-')) {
            text = cleanedText.slice(0, 8) + '-' + cleanedText.slice(8);
        }

        // Validar el patrón completo ########-#
        const duiPattern = /^\d{8}-\d$/;
        if (duiPattern.test(text) || text === "") {
            setErrorMessage("");
            
        } else {
            setErrorMessage("Número de DUI debe seguir el formato ########-#.");
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
                onChangeText={handleTextChange} // Usar la función de validación
                editable={!bloqueado} // Establece si el TextInput es editable según la propiedad bloqueado
                keyboardType="numeric" // Cambia el teclado a numérico
                maxLength={10} // Limita la cantidad de caracteres a 10 (xxxxxxxx-#)
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
