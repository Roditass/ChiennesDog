import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";

export default function ContraInput({
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
