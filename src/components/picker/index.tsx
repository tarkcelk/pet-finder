import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {$S_Picker} from 'style/elements';
import View from 'elements/view';
import Icon from 'elements/icon';
import Validation from '../validation';
import {Validation as ValidationType} from 'types/components';

type Props = {
  items: any[];
  onValueChange: (value: any, index: number) => void;
  selectedValue?: object | number | string;
  placeholder?: string;
  style?: object;
  validation?: ValidationType;
};
const Picker: React.FC<Props> = ({
  items,
  onValueChange,
  selectedValue,
  placeholder,
  style,
  validation,
}) => {
  const pickerStyle = {...style};
  return (
    <>
      <View style={$S_Picker.container}>
        <RNPickerSelect
          items={items && items.length > 0 ? items : []}
          onValueChange={onValueChange}
          value={selectedValue}
          placeholder={{label: placeholder}}
          style={{
            inputAndroid: pickerStyle,
            inputIOS: pickerStyle,
            placeholder: $S_Picker.placeholder,
            iconContainer: $S_Picker.iconContainer,
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => <Icon name={'angle-down'} />}
        />
      </View>
      {validation && (
        <Validation message={validation.message} visible={validation.visible} />
      )}
    </>
  );
};

export default Picker;
