import React from 'react';
import {Text} from 'elements';
import {$S_Validation} from 'style/components';
import {Validation as ValidationType} from 'types/components';

const Validation: React.FC<ValidationType> = ({message, visible}) => {
  return (
    <>
      {visible && <Text style={$S_Validation.validationText}>{message}</Text>}
    </>
  );
};

export default Validation;
