import React from 'react';
import {TouchableOpacity as NativeButton} from 'react-native';
import {$S_Button} from 'style/components';
import {Text, Icon} from 'elements';

type Props = {
  style?: object;
  onPress?: () => void;
  title?: string;
  icon?: string;
  titleStyle?: object;
  noDefaultStyle?: boolean;
};
const TouchableOpacity: React.FC<Props> = ({
  style,
  onPress,
  title,
  titleStyle,
  icon,
  noDefaultStyle,
  children,
}) => {
  return (
    <NativeButton
      onPress={onPress}
      style={[!noDefaultStyle && $S_Button.button, style]}>
      {!!title && (
        <Text style={[!noDefaultStyle && $S_Button.text, titleStyle]}>
          {title}
        </Text>
      )}
      {icon && <Icon name={icon} />}
      {children}
    </NativeButton>
  );
};

export default TouchableOpacity;
