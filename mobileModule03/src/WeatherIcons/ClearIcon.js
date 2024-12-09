import React from 'react';
import { Svg, Circle, Line } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withRepeat, withTiming } from 'react-native-reanimated';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default function SunIcon() {
  // Valeur partagée pour l'angle de rotation
  const rotation = useSharedValue(0);

  // Animation : rotation continue
  React.useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 5000 }), -1, false); // Tourne toutes les 5 secondes
  }, [rotation]);

  // Propriétés animées
  const animatedProps = useAnimatedProps(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <AnimatedSvg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      animatedProps={animatedProps}
    >
      {/* Rayons */}
      <Line x1="28" y1="0" x2="28" y2="8" stroke="#ffa500" strokeWidth="2" />
      <Line x1="28" y1="48" x2="28" y2="56" stroke="#ffa500" strokeWidth="2" />
      <Line x1="0" y1="28" x2="8" y2="28" stroke="#ffa500" strokeWidth="2" />
      <Line x1="48" y1="28" x2="56" y2="28" stroke="#ffa500" strokeWidth="2" />
      <Line x1="8" y1="8" x2="16" y2="16" stroke="#ffa500" strokeWidth="2" />
      <Line x1="40" y1="40" x2="48" y2="48" stroke="#ffa500" strokeWidth="2" />
      <Line x1="8" y1="48" x2="16" y2="40" stroke="#ffa500" strokeWidth="2" />
      <Line x1="40" y1="16" x2="48" y2="8" stroke="#ffa500" strokeWidth="2" />

      {/* Cercle central */}
      <Circle cx="28" cy="28" r="10" fill="#ffa500" />
    </AnimatedSvg>
  );
}