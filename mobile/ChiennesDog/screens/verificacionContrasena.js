import React, { useEffect, useState } from "react";
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

export default function Verificacion({ route }) {
    const {token} = route.params;
    const [codigo, setCodigo] = useState("");
    const [keyboardVisible, setkeyboardVisible] = useState(false);
    const navigation = useNavigation();

    const handlerVerificacion = async () => {
        try {
            //Crea un formulario FormData con los datos 
            const form = new FormData();
            form.append("token", token);
            form.append("codigoSecretoCOntraseña")

            const DATA = await fetchData("cliente", "emailPasswordValidator", form);

            if (DATA.status) {
                setCodigo("");
                Alert.alert("Éxito", "Verificacion Correcta");
                tokenV = DATA.dataset
                navigation.replace("CambioContraseña", { tokenV });
            } else {
                //MUestra Error
                console.log(DATA);
                Alert.alert("Error", DATA.error);
            }
        } catch (error) {
            console.error(error, "Error desde Catch");
            Alert.alert("Error", "Ocurrió un error al verificar la contraseña");
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
      
    const navigarCambiar = async () => {
        navigation.replace("CambioContraseña");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <Image source={require("../path-to-your-image.png")} style={styles.logo} />
                <View style={styles.content}>
                    <Text style={styles.title}>Verificación</Text>
                    <Text style={styles.subtitle}>Ingrese el codigo de verificación que se le envio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Codigo"
                        placeholderTextColor="#FFFFFF"
                        value={correo}
                        onChangeText={setCorreo}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.btnLink} onPress={navigarCambiar}>
                        <Text style={styles.textLink}>Cambiar Contraseña</Text>
                    </TouchableOpacity>
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
    subtitle: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
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
    btnLink: {
        marginTop: 20,
    },
    textLink: {
        color: "#FFFFFF",
        fontSize: 18,
    },
});
