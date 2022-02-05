import React from 'react';
import {ImageBackground as NativeImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  source: object;
  style?: object;
  children: React.ReactNode;
};
const Modal: React.FC<Props> = ({source, style, children}) => {
  const insets = useSafeAreaInsets();

  return (
    <NativeImageBackground
      source={source}
      style={[style, {paddingBottom: insets.bottom}]}>
      {children}
    </NativeImageBackground>
  );
};

export default Modal;
