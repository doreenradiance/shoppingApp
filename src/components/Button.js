import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

export default Button = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
)