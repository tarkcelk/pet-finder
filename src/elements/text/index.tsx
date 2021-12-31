import React from 'react';
import {Text as NativeText} from 'react-native';

type Props = {
  style?: object;
};
const Text: React.FC<Props> = ({children, style, ...restProps}) => {
  return (
    <NativeText style={style} {...restProps}>
      {children}
    </NativeText>
  );
};

export default Text;
