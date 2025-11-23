import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  mode?: 'primary' | 'secondary' | 'danger' | 'white';
}

export default function Button({
  title,
  onPress,
  mode = 'primary',
}: ButtonProps) {

  const backgroundColors = {
    primary: '#FFFFFF',
    secondary: '#5470EE',
    danger: '#FF4D4F',
    white: '#ffffff',
  };

  // secondary에만 border 주기
  const borderStyles = {
    primary: { borderWidth: 0, borderColor: 'transparent' },
    secondary: { borderWidth: 2, borderColor: '#ffffff' },
    danger: { borderWidth: 0, borderColor: 'transparent' },
    white: { borderWidth: 0, borderColor: 'transparent' },
  };

  const textColors = {
    primary: '#5470EE',
    secondary: '#ffffff',
    danger: '#ffffff',
    white: '#5470EE',
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColors[mode] },
        borderStyles[mode],  
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColors[mode] }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
