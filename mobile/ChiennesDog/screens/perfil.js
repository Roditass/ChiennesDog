import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    Dimensions,
    StyleSheet,
    TextInput,
} from "react-native";
import fetchData from "../utils/fetchData";
import ProInput from "../components/inputs/proInputs";
import DefaultBtn from "../components/buttons/defaultBtn";

export default function Perfil({ navigation }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const [dui, setDui] = useState("");
    const [nacimiento, setNacimiento] = useState("");

    const getPerfilData = async () => {
        try {
            const DATA = await fetchData("cliente", "readOne");
            if (DATA.status) {
                const usuario = DATA.dataset;
                setNombre(usuario.nombre_cliente);
                setApellido(usuario.apellido_cliente);
                setCorreo(usuario.correo_cliente);
                setTelefono(usuario.telefono_cliente);
                setDireccion(usuario.direccion_cliente);
                setDui(usuario.dui_cliente);
                setNacimiento(usuario.nacimiento_cliente);
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

    const handlerEditarPerfil = async () => {
        try {
            const form = new FormData();
            form.append("nombreClienteModal", nombre);
            form.append("apellidoClienteModal", apellido);
            form.append("telefonoClienteModal", telefono);
            form.append("direccionClienteModal", direccion);

            const DATA = await fetchData("cliente", "updateRow2", form);
            if (DATA.status) {
                Alert.alert("Hecho!", DATA.message);
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

    const handleLogout = async () => {
        try {
            const DATA = await fetchData("cliente", "logOut");
            if (DATA.status) {
                navigation.navigate("Sesion");
            } else {
                Alert.alert("Error", DATA.error);
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrió un error al cerrar la sesión");
        }
    };

    const navigarRecuperacion = async () => {
        navigation.replace("Recuperacion");
    };

    useEffect(() => {
        getPerfilData();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.tittle}>Perfil</Text>
                </View>
                <View style={styles.formContainer}>
                    <ProInput
                        placeHolder="..."
                        setValor={nombre}
                        setTextChange={setNombre}
                        texto= "Nombre: "
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={apellido}
                        setTextChange={setApellido}
                        texto= "Apellido: "
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={correo}
                        setTextChange={setCorreo}
                        texto= "Correo: "
                        bloqueado={true}
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={telefono}
                        setTextChange={setTelefono}
                        texto= "Teléfono: "
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={direccion}
                        setTextChange={setDireccion}
                        texto= "Dirección: "
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={dui}
                        setTextChange={setDui}
                        texto= "DUI: "
                        bloqueado={true}
                    />
                    <ProInput
                        placeHolder="..."
                        setValor={nacimiento}
                        setTextChange={setNacimiento}
                        texto= "Fecha de nacimiento: "
                        bloqueado={true}
                    />
                    
                    <View style={styles.btnContainer}>
                    <DefaultBtn textoBoton='Editar Usuario' accionBoton={handlerEditarPerfil} />
                    <DefaultBtn textoBoton='Cambiar Contraseña' accionBoton={navigarRecuperacion} />
                    <DefaultBtn textoBoton='Cerrar Sesión' accionBoton={handleLogout} />
                    </View>
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
    header: {
        backgroundColor: "#472B1F",
        height: Dimensions.get("window").height / 9,
        alignContent: "center",
        justifyContent: "center",
    },
    tittle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    btnContainer: {
        marginTop: 20,
        backgroundColor: "#FFA825",
        height: Dimensions.get("window").height / 2.2,
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 100,
        paddingTop: 10,
    },
});
