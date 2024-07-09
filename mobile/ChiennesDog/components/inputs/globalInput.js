import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

export default function GlobalInput({
    placeHolder,
    setValor,
    contra,
    setTextChange,
    texto,
    bloqueado,
    maxLength, // Nueva propiedad para definir la longitud máxima
}) {
    const [errorMessage, setErrorMessage] = useState("");
    const handleChangeText = (text) => {
        if (text.length >= 2 || text.length === 0) {
            setErrorMessage(""); // Limpiar el mensaje de error si el texto es válido            
        } else {
            setErrorMessage("Debe tener al menos 2 caracteres."); // Establecer mensaje de error
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

const styles = StyleSheet.create({
    inputConteiner: {
        backgroundColor: "#FFE6D5",
        padding: 12,
        paddingLeft: 22,
        borderRadius: 20,
        marginTop: "1%",
        width: "90%",
        alignSelf: "center",
        marginVertical: "7%",
    },
    input: {
        fontSize: 22,
        fontWeight: "medium",
    },
});
