import {Alert} from 'react-native';
import {hasProperty} from './object';

type onButtonPress = {
  onPress?: () => void;
  text?: string;
};
const showAlert = (
  title: string,
  message: string,
  onOkPress: onButtonPress = {},
  onCancelPress: onButtonPress = {},
) => {
  const buttons: onButtonPress[] = [];
  hasProperty(onOkPress) && buttons.push(onOkPress);
  hasProperty(onCancelPress) && buttons.push(onCancelPress);
  const isPrompt = !(buttons.length > 0);
  if (isPrompt) buttons.push({text: 'Tamam'});
  Alert.alert(title, message, buttons);
};
export {showAlert};
