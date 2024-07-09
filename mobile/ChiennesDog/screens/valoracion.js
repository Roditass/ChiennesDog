import React, { useEffect, useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from "react-native";

import fetchData from "../utils/fetchData";
import Rating from "../components/raters/starRate"
import DefaultBtn from "../components/buttons/defaultBtn";

export default function Valoracion({ navigation }) {
    const navegarDashboard = async () => {
        navigation.replace("Navigation");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView style={styles.mainContainer}>
                <View style={styles.containerImg}>
                    <Image
                        source={require("../assets/images/backgrounds/perrofacha.png")}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.tittle}>Valoranos</Text>
                    <Text style={styles.subtittle}>Tu opnión nos importa</Text>
                    <Rating />
                    <DefaultBtn
                        textoBoton="Enviar"
                        accionBoton={navegarDashboard}
                    />
                    <TouchableOpacity
                        style={styles.btnLink}
                        onPress={navegarDashboard}
                    >
                        <Text style={styles.textLink}>Cancelar</Text>
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
        height: Dimensions.get("window").height / 1.8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3968C7",
        borderLeftColor: "#1A459A",
        borderLeftWidth: 30,
        borderTopStartRadius: 90,
        padding: 30,
    },

    tittle: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#fff",
    },

    subtittle: {
        fontSize: 22,
        color: "#fff",
        marginBottom: "12%",
    },
    btnLink: {
        marginTop: "5%",
        marginBottom: "15%",
    },

    textLink: {
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: "medium",
    },
});
