import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Perfil, Dashboard, Carrito } from "../../screens";
import Svg, { Path } from "react-native-svg";

// Creando un navigator de pestañas inferiores (bottom tab navigator)
const Tab = createBottomTabNavigator();
// Opciones de configuración para el navigator de pestañas
const screenOptions = {
    tabBarShowLabel: false, // Oculta las etiquetas en la barra de pestañas
    headerShown: false, // Oculta la navegación de encabezado
    tabBarStyle: { // Estilos para la barra de pestañas
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70,
        backgroundColor: "#FF9E08",
        borderTopColor: "#FF6607",
        borderTopWidth: 1,
    },
};

const bottomNavigation = () => {
    return (
        <Tab.Navigator
            // Aplicando screenOptions a todas las pestañas
            screenOptions={screenOptions}
            // Estableciendo la ruta inicial
            initialRouteName="Dashboard"
        >
            <Tab.Screen
                name="Carrito"
                component={Carrito} // Componente a renderizar para la pestaña Carrito
                options={{
                    tabBarIcon: ({ focused }) => { // Personalizando el ícono de la pestaña
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Svg
                                    width="35"
                                    height="30"
                                    viewBox="0 0 35 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M33.25 0H1.75C1.28587 0 0.840752 0.185924 0.512563 0.516871C0.184374 0.847817 0 1.29668 0 1.76471V26.4706C0 27.4066 0.368749 28.3044 1.02513 28.9663C1.6815 29.6282 2.57174 30 3.5 30H31.5C32.4283 30 33.3185 29.6282 33.9749 28.9663C34.6313 28.3044 35 27.4066 35 26.4706V1.76471C35 1.29668 34.8156 0.847817 34.4874 0.516871C34.1592 0.185924 33.7141 0 33.25 0ZM17.5 15.8824C12.0433 15.8824 7.54694 11.6656 7.04632 6.29314C6.99508 5.74323 7.44772 5.29412 8 5.29412H9.5C10.0523 5.29412 10.4926 5.74436 10.5696 6.29125C11.0513 9.71354 13.9751 12.3529 17.5 12.3529C21.0249 12.3529 23.9487 9.71354 24.4304 6.29125C24.5074 5.74436 24.9477 5.29412 25.5 5.29412H27C27.5523 5.29412 28.0049 5.74323 27.9537 6.29313C27.4531 11.6656 22.9567 15.8824 17.5 15.8824Z"
                                        fill="white"
                                    />
                                </Svg>
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Dashboard"
                component={Dashboard} // Componente a renderizar para la pestaña Dashboard
                options={{
                    tabBarIcon: ({ focused }) => { // Personalizando el ícono de la pestaña
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Svg
                                    width="33"
                                    height="30"
                                    viewBox="0 0 33 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M32.5723 15.486L17.7239 0.475094C17.0987 -0.158365 15.8976 -0.158365 15.2723 0.475094L0.423976 15.486C0.210253 15.7015 0.0699661 15.9689 0.020174 16.2557C-0.0296181 16.5424 0.0132295 16.8361 0.143507 17.1011C0.407478 17.643 0.998112 17.9913 1.64979 17.9913H3.94942C4.5017 17.9913 4.94942 18.439 4.94942 18.9913V28.4989C4.94942 28.897 5.12324 29.2788 5.43264 29.5603C5.74204 29.8419 6.16168 30 6.59924 30H11.5487C11.9862 30 12.4059 29.8419 12.7153 29.5603C13.0247 29.2788 13.1985 28.897 13.1985 28.4989V23.4946C13.1985 22.9423 13.6462 22.4946 14.1985 22.4946H18.7978C19.35 22.4946 19.7978 22.9423 19.7978 23.4946V28.4989C19.7978 28.897 19.9716 29.2788 20.281 29.5603C20.5904 29.8419 21.01 30 21.4476 30H26.397C26.8346 30 27.2542 29.8419 27.5636 29.5603C27.873 29.2788 28.0468 28.897 28.0468 28.4989V18.9913C28.0468 18.439 28.4946 17.9913 29.0468 17.9913H31.3465C31.666 17.9925 31.979 17.9092 32.2473 17.7513C32.5157 17.5935 32.7277 17.3681 32.8577 17.1025C32.9876 16.8369 33.0298 16.5427 32.9792 16.2556C32.9285 15.9686 32.7871 15.7012 32.5723 15.486Z"
                                        fill="white"
                                    />
                                </Svg>
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil} // Componente a renderizar para la pestaña Perfil
                options={{
                    tabBarIcon: ({ focused }) => { // Personalizando el ícono de la pestaña
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Svg
                                    width="31"
                                    height="30"
                                    viewBox="0 0 31 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M7.75 7.10526C7.75 11.0226 11.2272 14.2105 15.5 14.2105C19.7728 14.2105 23.25 11.0226 23.25 7.10526C23.25 3.18789 19.7728 0 15.5 0C11.2272 0 7.75 3.18789 7.75 7.10526ZM29.2778 30H31V28.4211C31 22.3279 25.5905 17.3684 18.9444 17.3684H12.0556C5.40778 17.3684 0 22.3279 0 28.4211V30H29.2778Z"
                                        fill="white"
                                    />
                                </Svg>
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

// Exportando la función bottomNavigation como componente predeterminado
export default bottomNavigation;
