// Componente DatePicker con formato de fecha personalizado
import React, { useState } from "react";
import { View, Platform, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Svg, { Path } from "react-native-svg";

// Definiendo el componente DatePicker
export default function DatePicker({ label, setValor }) {
    const [show, setShow] = useState(false); // Estado para controlar la visibilidad del DatePicker
    const [value, setValue] = useState(new Date()); // Estado local para almacenar la fecha seleccionada

    // Función que se ejecuta al cambiar la fecha seleccionada en el DatePicker
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || new Date(); // Si no se selecciona una fecha, se mantiene la actual
        setShow(Platform.OS === "ios"); // Mostrar el DatePicker en iOS
        setValue(currentDate); // Actualizar el valor utilizando setValue
        setFormattedDate(currentDate); // Actualizar el valor enviado a través de setValor con formato personalizado
    };
    // Función para mostrar el DatePicker
    const showMode = () => {
        setShow(true); // Mostrar el DatePicker al establecer show en true
    };
    // Función para formatear la fecha seleccionada en el formato deseado
    const setFormattedDate = (date) => {
        const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())}`;
        setValor(formattedDate); // Actualiza el valor con el formato deseado
    };
    // Función para agregar cero delante de números menores a 10
    const padZero = (num) => {
        return num < 10 ? `0${num}` : num;
    };
    // Renderizado del componente
    return (
        <View style={styles.container}>
            <View style={styles.txtContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.dateContainer}>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={value}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={styles.labelContainer}>
                    <Text style={styles.dateText}>{value.toDateString()}</Text>
                </View>
                <View style={styles.btnDate}>
                    <Svg
                        width="20"
                        height="23"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onPress={showMode}
                    >
                        <Path
                            d="M4.44446 10.6778H6.66668V12.8778H4.44446V10.6778ZM4.44446 15.0778H6.66668V17.2778H4.44446V15.0778ZM8.8889 10.6778H11.1111V12.8778H8.8889V10.6778ZM8.8889 15.0778H11.1111V17.2778H8.8889V15.0778ZM13.3333 10.6778H15.5556V12.8778H13.3333V10.6778ZM13.3333 15.0778H15.5556V17.2778H13.3333V15.0778Z"
                            fill="#828181"
                        />
                        <Path
                            d="M2.22222 22.7778H17.7778C19.0033 22.7778 20 21.7911 20 20.5778V5.17777C20 3.96447 19.0033 2.97777 17.7778 2.97777H15.5556V0.777771H13.3333V2.97777H6.66667V0.777771H4.44444V2.97777H2.22222C0.996667 2.97777 0 3.96447 0 5.17777V20.5778C0 21.7911 0.996667 22.7778 2.22222 22.7778ZM17.7778 7.37777L17.7789 20.5778H2.22222V7.37777H17.7778Z"
                            fill="#828181"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
}

// Estilos para el componente DatePicker
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    txtContainer: {
        display: "flex",
        width: "80%",
        textAlign: "left",
    },
    label: {
        textAlign: "left",
        fontSize: 22,
        marginBottom: 10,
        alignSelf: "flex-start",
        color: "#FFF",
    },
    dateContainer: {
        backgroundColor: "#FFE6D5",  // Color de fondo del contenedor de fecha
        width: "90%",  // Ancho del contenedor de fecha
        borderRadius: 20,  // Borde redondeado del contenedor
        display: "flex",
        flexDirection: "row",  // Disposición en fila de los elementos dentro del contenedor
        padding: 12,  // Relleno interno del contenedor
        paddingLeft: 22,  // Relleno izquierdo del contenedor
        paddingRight: 22,  // Relleno derecho del contenedor
    },
    dateText: {
        fontSize: 22,
        color: "#828181",
    },
    btnDate: {
        alignSelf: "center",  // Alinear el botón de calendario en el centro vertical
        alignItems: "flex-end",  // Alinear el botón de calendario a la derecha dentro de su contenedor
        marginLeft: "20%",  // Margen izquierdo para el botón de calendario
    },
});