import React from 'react';
import {View as NativeView} from 'react-native';

type Props = {
  style?: object;
};
const View: React.FC<Props> = ({children, style, ...restProps}) => {
  return (
    <NativeView style={style} {...restProps}>
      {children}
    </NativeView>
  );
};

export default View;
