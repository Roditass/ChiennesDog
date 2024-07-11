import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

// Definición del componente funcional Card
const Card = ({ text, image, onPress }) => {
    return (
        // TouchableOpacity es un componente que responde a la interacción del usuario
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.cardText}>{text}</Text>
            <Image source={image} style={styles.image} />
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
        padding: 10, // Espaciado interno
        paddingHorizontal: 30, // Espaciado horizontal interno
        marginVertical: "2%", // Margen vertical
    },
    // Estilo para el texto dentro de la tarjeta
    cardText: {
        fontSize: 18, // Tamaño de la fuente
        fontWeight: "bold", // Grosor de la fuente (negrita)
        color: "#000", // Color del texto (negro)
        flex: 1, // Ocupa el espacio disponible restante
    },
    // Estilo para la imagen dentro de la tarjeta
    image: {
        width: 100, // Ancho de la imagen
        height: 80, // Altura de la imagen
        resizeMode: "cover", // Modo de redimensionado de la imagen
        borderRadius: 10, // Bordes redondeados de la imagen
    }
});

export default Card;
