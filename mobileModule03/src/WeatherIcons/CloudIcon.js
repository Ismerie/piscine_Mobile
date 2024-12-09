import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { Animated } from "react-native";

// Composant animé CloudIcon
export default function AnimatedCloudIcon({ size = 100, color = "#B0C4DE" }) {
  const animatedScale = new Animated.Value(1);

  // Animation de "respiration"
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedScale, {
        toValue: 1.1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Animated.View
      style={{
        transform: [{ scale: animatedScale }],
      }}
    >
      <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        {/* Nuage principal */}
        <G>
          <Path
            d="M47.5 34.5C51.5 34.5 54.5 37.5 54.5 41.5C54.5 45.5 51.5 48.5 47.5 48.5H16.5C12.5 48.5 9.5 45.5 9.5 41.5C9.5 37.5 12.5 34.5 16.5 34.5H18C18 30.5 21 27.5 25 27.5C27.5 27.5 30 28.5 31.5 30C32.5 26 36 23 40.5 23C45.5 23 49 27 49 31.5C49 32 48.5 33 48.5 33.5C48.5 33.5 47.5 34 47.5 34.5Z"
            fill={color}
          />
        </G>
        {/* Ombre ou bordure du nuage */}
        <Path
          d="M48.5 34C52 34 54.5 36.5 54.5 40C54.5 43.5 52 46 48.5 46H15.5C12 46 9.5 43.5 9.5 40C9.5 36.5 12 34 15.5 34H18C18 30.5 21 27.5 25 27.5C27.5 27.5 30 28.5 31.5 30C32.5 26 36 23 40.5 23C44.5 23 48 26.5 48.5 30C48.5 31 48 32 48 32.5C48 33.5 47 34 47.5 34Z"
          stroke={color}
          strokeWidth={1.5}
          fillOpacity={0.3}
        />
      </Svg>
    </Animated.View>
  );
}
