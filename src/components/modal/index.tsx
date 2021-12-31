import React from 'react';
import Button from '../button';
import {Modal as NativeModal} from 'elements';
import {$S_Modal} from 'style/components';
import Container from '../container';

type Props = {
  visible: boolean;
  onClose: () => void;
};
const Modal: React.FC<Props> = ({children, visible, onClose}) => {
  return (
    <Container hideTop>
      <NativeModal style={$S_Modal.container} visible={visible}>
        <Button
          noDefaultStyle
          icon={'window-close'}
          style={$S_Modal.buttonCross}
          onPress={onClose}
        />
        {children}
      </NativeModal>
    </Container>
  );
};

export default Modal;
