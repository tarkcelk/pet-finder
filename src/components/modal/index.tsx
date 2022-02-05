import React from 'react';
import Button from '../button';
import {Modal as NativeModal} from 'elements';
import {$S_Modal} from 'style/components';
import Container from '../container';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  visible: boolean;
  onClose: () => void;
};
const Modal: React.FC<Props> = ({children, visible, onClose}) => {
  const insets = useSafeAreaInsets();

  return (
    <Container hideTop>
      <NativeModal style={$S_Modal.container} visible={visible}>
        <Button
          noDefaultStyle
          icon={'window-close'}
          style={[$S_Modal.buttonCross, {top: insets.top}]}
          onPress={onClose}
        />
        {children}
      </NativeModal>
    </Container>
  );
};

export default Modal;
