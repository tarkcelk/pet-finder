import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {TextInput, View} from 'elements';
import {$S_Input} from 'style/components';
import {Validation as ValidationType} from 'types/components';
import Validation from '../validation';

type Props = {
  style?: object;
  value: string;
  onChangeText?: (changedText: string) => void;
  placeholderText?: string;
  placeholderTextColor?: string;
  textArea?: boolean;
  validation?: ValidationType;
  password?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const Input: React.FC<Props> = ({
  style,
  value,
  onChangeText,
  placeholderText,
  placeholderTextColor,
  textArea,
  validation,
  password,
  keyboardType,
}) => {
  return (
    <View style={[$S_Input.defaultTextInputContainer]}>
      <TextInput
        style={[$S_Input.defaultTextInput, style]}
        placeholderTextColor={
          placeholderTextColor ?? $S_Input.placeHolderText.color
        }
        placeholderText={placeholderText}
        value={value}
        onChangeText={onChangeText}
        numOfLines={textArea ? 3 : 1}
        password={password}
        keyboardType={keyboardType}
      />
      {validation && (
        <Validation message={validation.message} visible={validation.visible} />
      )}
    </View>
  );
};

export default Input;
