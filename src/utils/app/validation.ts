import {Validation} from 'types/components';

type ValidationMethods = {
  getErrorsInField: (field: string) => string;
  isFieldInError: (field: string) => boolean;
};
const getValidationObject = (
  field: string,
  validationMethods: ValidationMethods,
  customMessage: string = '',
): Validation => {
  return {
    message:
      customMessage.length > 0
        ? customMessage
        : validationMethods.getErrorsInField(field)?.[0],
    visible: validationMethods.isFieldInError(field),
  };
};

export {getValidationObject};
