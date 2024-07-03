import { StyleSheet, Text, TouchableOpacity} from 'react-native';
export default function defaultBtn({textoBoton, accionBoton}) {

    return(
        <>
        <TouchableOpacity style={styles.button} onPress={accionBoton}>
            <Text style={styles.buttonText}>{textoBoton}</Text>
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({

    button: {
        width: "80%",
        borderRadius: 20,
        backgroundColor: "#E65E0A",
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'medium',
        fontSize: 25,
    }
});