import React, { useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Alert,
    StyleSheet,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Image
} from "react-native";

import DefaultBtn from "../components/buttons/defaultBtn";
import fetchData from "../utils/fetchData";
import { useNavigation } from "@react-navigation/native";

export default function CambioContrasena({ route }) {

    const { tokenV } = route.params;
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [keyboardVisible, setkeyboardVisible] = useState(false);
    const navigation = useNavigation();

    const handlerCambioContrasena = async () => {
        try {
            //Crea un FormData con los datos
            const form = new FormData();
            form.append("token", tokenV);
            form.append("usuario_nueva_contraseña", newPassword);
            form.append("usuario_confirmar_nueva_contraseña", confirmPassword);

            const DATA = await fetchData("cliente", "changePasswordByEmail", form);
            if (DATA.status) {
                setNpassword("");
                setCNpassword("");
                Alert.alert("Exito", "La contraseña se ha cambiado correctamente");
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Sesion' }],
                });
            } else {
                // Muestra una alerta en caso de error
                console.log(DATA);
                Alert.alert("Error sesión", DATA.error);

                if (DATA.error == "El tiempo para cambiar su contraseña ha expirado") {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Sesion' }],
                    });
                }
            }
        } catch (error) {
            // Maneja errores que puedan ocurrir durante la solicitud
            console.error(error, "Error desde Catch");
            Alert.alert("Error", "Ocurrió un error al iniciar sesión");
        }
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true); // o el valor de desplazamiento adecuado
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false); // restablecer el valor de desplazamiento
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Cambio de contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nueva contraseña"
                        placeholderTextColor="#FFFFFF"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar contraseña"
                        placeholderTextColor="#FFFFFF"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                    <DefaultBtn
                        textoBoton="Acceder"
                        accionBoton={handlerCambioContrasena}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    mainContainer: {
        flexGrow: 1,
        backgroundColor: "#FFE6D5",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "100%",
        height: Dimensions.get("window").height / 1.4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6607",
        borderRadius: 10,
        padding: 30,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFA07A",
        borderColor: "#FF6607",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        color: "#fff",
        marginBottom: 20,
    },
});
