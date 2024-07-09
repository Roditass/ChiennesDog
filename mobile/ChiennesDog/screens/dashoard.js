import React, { useEffect, useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Alert,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from "react-native";
import fetchData from "../utils/fetchData";
import Card from "../components/cards/simpleCard"
import { useNavigation } from '@react-navigation/native';

const Dashoard = () => {

    const navigation = useNavigation();

    const navegarGaleria = async () => {
        navigation.replace("ProductoGale");
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.tittle}>Categorías</Text>
                </View>
                <View style={styles.content}>
                <Card 
                        text="Accesorios" 
                        image={require("../assets/images/examples/image4.png")} 
                        onPress={navegarGaleria}
                    />
                    <Card 
                        text="Comida" 
                        image={require("../assets/images/examples/image7.png")} 
                        onPress={navegarGaleria}
                    />
                    <Card 
                        text="Cosméticos" 
                        image={require("../assets/images/examples/image12.png")} 
                        onPress={navegarGaleria}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

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
        borderBottomEndRadius: 90,
        marginBottom: "10%",
    },
    tittle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    content: {
        alignItems: "center",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        height: Dimensions.get("window").height / 6,
        borderRadius: 20,
        width: Dimensions.get("window").width / 1.2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "2%",
    },
    image: {
        resizeMode: "cover",
    }
});

export default Dashoard;
