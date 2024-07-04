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

export default function Registro({ navigation }) {
    const [isContra, setIsContra] = useState(true);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dui, setDui] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");

    const handlerRegistro = async () => {
        try {
            const form = new FormData();
            form.append("nombreCliente", nombre);
            form.append("apellidoCliente", apellido);
            form.append("correoCliente", correo);
            form.append("direccionCliente", direccion);
            form.append("duiCliente", dui);
            form.append("nacimientoCliente", nacimiento);
            form.append("telefonoCliente", telefono);
            form.append("claveCliente", contrasena);
            form.append("confirmarClave", confirmarContrasena);

            const DATA = await fetchData("cliente", "signUpMovil", form);
            if (DATA.status) {
                // Navega a la siguiente pantalla o ruta en la aplicación
                await handlerLogin();
            } else {
                console.log(DATA.error);
                Alert.alert("Error", DATA.error);
                return;
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Ocurrió un error al registrar la cuenta");
        }
    };

    const handlerLogin = async () => {
        try {
            // Crea un formulario FormData con los datos de usuario y contraseña
            const form = new FormData();
            form.append("correo", correo);
            form.append("clave", contrasena);

            // Realiza una solicitud para iniciar sesión usando fetchData
            const DATA = await fetchData("cliente", "logIn", form);
            console.log(DATA);
            // Verifica la respuesta del servidor
            if (DATA.status) {
                Alert.alert(
                    "Bienvenido!",
                    "Cuenta registrada satisfactoriamente"
                );
                setContrasena("");
                setApellido("");
                setNombre("");
                setCorreo("");
                setDui("");
                setTelefono("");
                setNacimiento("");
                setDireccion("");
                setConfirmarContrasena("");
                navigation.replace("Navigator");
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

    const navigateSesion = async () => {
        navigation.replace("Sesion");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView style={styles.mainContainer}>
            <View style={styles.Header}>
            <Text style={styles.tittle}>Chiennes Dog</Text>
            </View>
            <View style={styles.Content}>
                
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
});
