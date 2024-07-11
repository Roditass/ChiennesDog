import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions, View } from 'react-native';

// Definición del componente funcional ColorCard
const ColorCard = ({ text, image, onPress }) => {
    return (
        // TouchableOpacity es un componente que responde a la interacción del usuario
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

// Creación de los estilos para los componentes
const styles = StyleSheet.create({
    // Estilo para la tarjeta
    card: {
        flexDirection: "row", // Orientación de los hijos en fila
        backgroundColor: "#FFFFFF", // Color de fondo blanco
        height: Dimensions.get("window").height / 6, // Altura de la tarjeta (1/6 de la altura de la pantalla)
        borderRadius: 20, // Bordes redondeados
        width: Dimensions.get("window").width / 1.2, // Ancho de la tarjeta (1.2 del ancho de la pantalla)
        alignItems: "center", // Alinear elementos hijos al centro verticalmente
        marginVertical: "2%", // Margen vertical
    },
    // Estilo para el contenido izquierdo (texto)
    leftcontent: {
        flex: 1, // Ocupa el 50% del espacio disponible
        backgroundColor: "#472B1F", // Color de fondo marrón oscuro
        height: "100%", // Altura completa del contenedor padre
        justifyContent: "center", // Alineación vertical centrada
        borderTopRightRadius: 20, // Bordes redondeados arriba a la derecha
        borderBottomRightRadius: 20, // Bordes redondeados abajo a la derecha
        paddingHorizontal: "4%", // Espaciado horizontal interno
    },
    // Estilo para el contenido derecho (imagen)
    rightcontent: {
        flex: 1, // Ocupa el 50% del espacio disponible
        alignItems: 'center', // Alineación horizontal centrada
    },
    // Estilo para el texto dentro de la tarjeta
    cardText: {
        fontSize: 18, // Tamaño de la fuente
        fontWeight: "bold", // Grosor de la fuente (negrita)
        color: "#ffffff", // Color del texto (blanco)
        alignSelf: "center", // Alineación horizontal centrada
    },
    // Estilo para la imagen dentro de la tarjeta
    image: {
        width: 100, // Ancho de la imagen
        height: 80, // Altura de la imagen
        resizeMode: "cover", // Modo de redimensionado de la imagen
        borderRadius: 10, // Bordes redondeados de la imagen
    }
});

export default ColorCard;
