import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CustomBottomSheet = ({ visible, onClose }) => {
  const opacity = useSharedValue(0);

  const fadeIn = () => {
    opacity.value = withSpring(1);
  };

  const fadeOut = () => {
    opacity.value = withTiming(0, { duration: 300 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handleOverlayPress = () => {
    fadeOut();
    setTimeout(onClose, 300); // Delay closing to allow the fade-out animation
  };

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <Animated.View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <Animated.View style={styles.bottomSheet}>
        <Text>Your Bottom Sheet Content</Text>
        <TouchableOpacity onPress={() => { fadeOut(); onClose(); }}>
          <Text>Close Bottom Sheet</Text>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
      backgroundColor: 'white',
      padding: 16,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  });
export default CustomBottomSheet;