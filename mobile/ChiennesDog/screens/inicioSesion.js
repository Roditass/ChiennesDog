import React, { useEffect, useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Alert,
    ImageBackground,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from "react-native";

import fetchData from "../utils/fetchData";
import LogInput from "../components/inputs/logInput";
import CorreoInput from "../components/inputs/correoInput";
import DefaultBtn from "../components/buttons/defaultBtn";

export default function Sesion({ navigation }) {
    const [isContra, setIsContra] = useState(true);
    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const validarSesion = async () => {
        try {
            const DATA = await fetchData("cliente", "getUser");
            if (DATA.session) {
                // cerrarSesion();
                // console.log("Se eliminó la sesión");
                setContrasenia("");
                setUsuario("");
                // Navega a la siguiente pantalla o ruta en la aplicación
                navigation.replace("Navigation");
            } else {
                console.log("No hay sesión activa");
                return;
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Ocurrió un error al validar la sesión");
        }
    };

    const cerrarSesion = async () => {
        try {
            const DATA = await fetchData("cliente", "logOut");

            if (DATA.status) {
                console.log("Sesión Finalizada");
            } else {
                console.log("No se pudo eliminar la sesión");
            }
        } catch (error) {
            console.error(error, "Error desde Catch");
            Alert.alert(
                "Error",
                "Ocurrió un error al iniciar sesión con bryancito"
            );
        }
    };

    const handlerLogin = async () => {
        try {
            // Crea un formulario FormData con los datos de usuario y contraseña
            const form = new FormData();
            form.append("correo", usuario);
            form.append("clave", contrasenia);
            

            // Realiza una solicitud para iniciar sesión usando fetchData
            const DATA = await fetchData("cliente", "logIn", form);

            // Verifica la respuesta del servidor
            if (DATA.status) {
                // Limpia los campos de usuario y contraseña
                setContrasenia("");
                setUsuario("");
                // Navega a la siguiente pantalla o ruta en la aplicación
                navigation.replace("Navigation");
            } else {
                // Muestra una alerta en caso de error
                console.log(DATA);
                Alert.alert("Error sesión", DATA.error);
            }
        } catch (error) {
            // Maneja errores que puedan ocurrir durante la solicitud
            console.error(error, "Error desde Catch");
            Alert.alert("Error", "Ocurrió un error al iniciar sesión");
        }
    };

    const navigarRegistrar = async () => {
        navigation.replace("Registro");
    };
    const navigarRecuperacion = async () => {
        navigation.replace("Recuperacion");
    };

    useEffect(() => {
        validarSesion();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView style={styles.mainContainer}>
                <View style={styles.content}>
                    <Text style={styles.tittle}>Iniciar sesión</Text>
                    <CorreoInput
                        placeHolder="Usuario"
                        setValor={usuario}
                        setTextChange={setUsuario}
                    />
                    <LogInput
                        placeHolder="Contraseña"
                        setValor={contrasenia}
                        setTextChange={setContrasenia}
                        contra={isContra}
                    />
                    <TouchableOpacity style={styles.btnLink} onPress={navigarRecuperacion}>
                        <Text style={styles.textLink}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <DefaultBtn
                        textoBoton="Acceder"
                        accionBoton={handlerLogin}
                    />
                    <TouchableOpacity style={styles.btnLink} onPress={navigarRegistrar}>
                        <Text style={styles.textLink}>Registrarse</Text>
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
        backgroundColor: "#FFE6D5",
    },

    content: {
        width: "100%",
        height: Dimensions.get("window").height / 1.4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AC4B12",
        marginTop: Dimensions.get("window").height / 2.8,
        borderLeftColor: "#FF6607",
        borderLeftWidth: 30,
        borderTopStartRadius: 90,
        padding: 30,
    },

    tittle: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 50,
    },

    btnLink:{
        marginBottom: "15%",
    },

    textLink: {
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: "medium",
    },
});
