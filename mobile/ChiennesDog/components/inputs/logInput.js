import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function LogInput({ placeHolder, setValor, contra, setTextChange }) {
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={setValor}
        placeholderTextColor={'#828181'}
        secureTextEntry={contra}
        onChangeText={setTextChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    inputConteiner:{
        backgroundColor: "#FFE6D5",
        padding: 12,
        paddingLeft: 22,
        borderRadius: 20,
        marginTop: "3%",
        width: "90%",
        alignSelf: "center"
    },
    input:{
        fontSize: 22,
        fontWeight: "medium",
    },
});