import { Platform, PixelRatio, Dimensions, Easing, Animated } from "react-native";
export default class Utilities {
    static fromRight(duration = 400) {
        return {
            transitionSpec: {
                duration,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true
            },
            screenInterpolator: ({ layout, position, scene }) => {
                const { index } = scene;
                const { initWidth } = layout;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index],
                    outputRange: [initWidth, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1]
                });

                return { opacity, transform: [{ translateX }] };
            }
        };
    }
}