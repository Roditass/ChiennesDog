import { StyleSheet, Text, TouchableOpacity} from 'react-native';

// Definición del componente funcional defaultBtn
export default function defaultBtn({textoBoton, accionBoton}) {

    return(
        // TouchableOpacity es un componente que responde a la interacción del usuario
        <TouchableOpacity style={styles.button} onPress={accionBoton}>
            <Text style={styles.buttonText}>{textoBoton}</Text>
        </TouchableOpacity>
    );
}

// Creación de los estilos para los componentes
const styles = StyleSheet.create({

    // Estilo para el botón
    button: {
        width: "80%", // Ancho del botón del 80% del contenedor padre
        borderRadius: 20, // Bordes redondeados con un radio de 20
        backgroundColor: "#E65E0A", // Color de fondo del botón (naranja)
        padding: 10, // Espaciado interno del botón
    },
    // Estilo para el texto dentro del botón
    buttonText: {
        textAlign: 'center', // Alineación del texto al centro
        color: "#FFF", // Color del texto (blanco)
        fontWeight: 'medium', // Grosor de la fuente (medio)
        fontSize: 25, // Tamaño de la fuente
    }
});