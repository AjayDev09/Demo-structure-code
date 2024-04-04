import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';

const AnimatedButton = ({title,onPress ,style}) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const handleOnPress = () => {
    animatedScale.setValue(0.85);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 10,
      speed: 10,
      useNativeDriver: true,
    }).start();
    onPress()
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnPress} style={{
        alignItems:"center"
      }}>
        <Animated.View
          style={[styles.button, { transform: [{ scale: animatedScale }],...style }]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  height:'100%',
  width:"100%",
  },
  button: {
    backgroundColor: 'purple',
   
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    paddingVertical:5,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AnimatedButton;
