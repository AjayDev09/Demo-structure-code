import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Easing,
} from 'react-native-reanimated';

var DotSize = 20;

const CustomPaginationDot = ({ index, active, onPress }) => {
  const scale = useSharedValue(1);

  const handlePress = () => {
    onPress(index);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: scale.value, // Fade out inactive dots
    };
  });

  React.useEffect(() => {
    if (active) {
      // Animate scale when the dot becomes active
      scale.value = withSpring(1.2, { damping: 2, stiffness: 80 });
    } else {
      // Reset scale when the dot becomes inactive
      scale.value = withSpring(1, { damping: 2, stiffness: 80 });
    }
  }, [active]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.paginationDotContainer}>
      <Animated.View style={[styles.paginationDot, animatedStyle]}>
        <Text style={[styles.dotText, active && styles.activeDotText]}>
          &bull;
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomPagination = ({ total, index, onPress }) => {
  const renderPaginationDots = () => {
    const dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(
        <CustomPaginationDot key={i} index={i} active={i === index} onPress={onPress} />
      );
    }
    return dots;
  };

  return <View style={styles.paginationContainer}>{renderPaginationDots()}</View>;
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDotContainer: {
    margin: 5,
  },
  paginationDot: {
    width: DotSize,
    height: DotSize,
    borderRadius: DotSize / 2,
    backgroundColor: '#ddd', // Inactive dot color
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    fontSize: 16,
    color: '#555', // Inactive dot text color
  },
  activeDotText: {
    color: '#007BFF', // Active dot text color
    fontWeight: 'bold',
  },
});

export default CustomPagination;
