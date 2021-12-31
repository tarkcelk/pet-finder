import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

const Icon: React.FC<Props> = ({name, size = 25, color = '#000'}) => {
  return <FontAwesome name={name} size={size} color={color} />;
};

export default Icon;
