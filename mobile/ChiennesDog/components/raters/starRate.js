import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const Star = ({ filled, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M54.8546 19.745C54.6818 19.236 54.3636 18.7887 53.9394 18.4584C53.5152 18.1281 53.0036 17.9292 52.4676 17.8863L36.7898 16.6407L30.0055 1.62495C29.7894 1.14132 29.438 0.730548 28.9936 0.442211C28.5492 0.153873 28.0309 0.000291129 27.5011 4.13486e-07C26.9714 -0.000290302 26.4528 0.152723 26.0081 0.440572C25.5634 0.728422 25.2116 1.13881 24.995 1.6222L18.2107 16.6407L2.53284 17.8863C2.00609 17.928 1.50251 18.1206 1.08235 18.441C0.662199 18.7614 0.343255 19.196 0.163679 19.6929C-0.0158961 20.1898 -0.0484991 20.7279 0.0697712 21.2428C0.188042 21.7577 0.452177 22.2277 0.830577 22.5964L12.4164 33.8892L8.31887 51.6298C8.19445 52.1668 8.23433 52.7288 8.43332 53.2429C8.63232 53.7569 8.98125 54.1993 9.43483 54.5126C9.88842 54.826 10.4257 54.9957 10.977 54.9999C11.5283 55.0041 12.0681 54.8426 12.5264 54.5362L27.5002 44.555L42.4741 54.5362C42.9425 54.8472 43.4949 55.0072 44.0571 54.9949C44.6192 54.9826 45.1641 54.7984 45.6184 54.4672C46.0728 54.136 46.4148 53.6737 46.5985 53.1423C46.7821 52.611 46.7987 52.0361 46.6458 51.4951L41.6161 33.8974L54.0901 22.6734C54.9069 21.9365 55.2066 20.7872 54.8546 19.745Z"
                    fill={filled ? "#FF9E08" : "#ffffff"} // Cambiado a amarillo cuando se selecciona
                />
            </Svg>
        </TouchableOpacity>
    );
};

const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleStarPress = (index) => {
        setRating(index);
        console.log(`Estrellas pintadas: ${index}`);
    };

    return (
        <View style={{ flexDirection: "row", marginBottom: "12%", }}>
            {[1, 2, 3, 4, 5].map((star, index) => (
                <Star
                    key={index}
                    filled={index < rating}
                    onPress={() => handleStarPress(index + 1)}
                />
            ))}
        </View>
    );
};

export default Rating;
