import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ColorCard = ({ text, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.cardText}>{text}</Text>
            <Image source={image} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        height: Dimensions.get("window").height / 6,
        borderRadius: 20,
        width: Dimensions.get("window").width / 1.2,
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 30,
        marginVertical: "2%",
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        flex: 1,
    },
    image: {
        width: 100,
        height: 80,
        resizeMode: "cover",
        borderRadius: 10,
    }
});

export default ColorCard;
