import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions, View } from 'react-native';

const ColorCard = ({ text, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.rightcontent}>
                <Image source={image} style={styles.image} />
            </View> 
            <View style={styles.leftcontent}>
                <Text style={styles.cardText}>{text}</Text>
            </View>
                       
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
        marginVertical: "2%",
    },
    leftcontent: {
        flex: 1,
        backgroundColor: "#472B1F",
        height: "100%",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: "4%",
    },
    rightcontent: {
        flex: 1,
        alignItems: 'center', 
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        alignSelf: "center",
    },
    image: {
        width: 100,
        height: 80,
        resizeMode: "cover",
        borderRadius: 10,
    }
});

export default ColorCard;
