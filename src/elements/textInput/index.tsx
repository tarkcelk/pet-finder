import React from 'react';
import {KeyboardTypeOptions, TextInput as NativeTextInput} from 'react-native';

type Props = {
  style?: object;
  value: string;
  onChangeText?: (text: string) => void;
  placeholderText?: string;
  placeholderTextColor?: string;
  numOfLines?: number;
  password?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const TextInput: React.FC<Props> = ({
  style,
  value,
  onChangeText,
  placeholderText,
  placeholderTextColor,
  numOfLines,
  password,
  keyboardType,
}) => {
  return (
    <NativeTextInput
      style={style}
      placeholderTextColor={placeholderTextColor}
      placeholder={placeholderText}
      value={value}
      onChangeText={onChangeText}
      numberOfLines={numOfLines}
      secureTextEntry={password}
      keyboardType={keyboardType ?? 'default'}
    />
  );
};

export default TextInput;
