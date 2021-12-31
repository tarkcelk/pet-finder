import React from 'react';
import {Modal as NativeModal} from 'react-native';

type Props = {
  visible: boolean;
  style?: object;
};
const Modal: React.FC<Props> = ({children, visible, style}) => {
  return (
    <NativeModal style={style} visible={visible}>
      {children}
    </NativeModal>
  );
};

export default Modal;
