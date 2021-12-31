import React, {RefObject} from 'react';
import {ScrollView as NativeScrollView} from 'react-native';

type Props = {
  style?: object;
  horizontal?: boolean;
  scrollEnabled?: boolean;
  svRef?: RefObject<NativeScrollView>;
  contentContainerStyle?: object;
};
const ScrollView: React.FC<Props> = ({
  children,
  style,
  horizontal,
  scrollEnabled,
  svRef,
  contentContainerStyle,
  ...restProps
}) => {
  return (
    <NativeScrollView
      ref={svRef}
      style={style}
      horizontal={horizontal}
      scrollEnabled
      contentContainerStyle={contentContainerStyle}
      {...restProps}>
      {children}
    </NativeScrollView>
  );
};

export default ScrollView;
