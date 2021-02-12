import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// this is a statless component
export const RoundedButton = ({
  styled = {},
  textStyling = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, styled]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyling]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

// this makes styles a function to be able to use with RoundedButton
const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
