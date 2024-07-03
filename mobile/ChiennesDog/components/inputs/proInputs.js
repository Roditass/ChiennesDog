import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from 'react';

export default function ProInput({
    placeHolder,
    setValor,
    contra,
    setTextChange,
    texto,
    bloqueado,
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
