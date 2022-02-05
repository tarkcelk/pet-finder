import React from 'react';
import {StatusBar, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  hideTop?: boolean;
  style?: object;
  hasKeyboard?: boolean;
  hideStatusBar?: boolean;
};
const Container: React.FC<Props> = ({
  style,
  children,
  hideTop,
  hasKeyboard,
  hideStatusBar,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={[
        {
          flex: 1,
          top: hideTop ? 0 : insets.top,
          marginBottom: hideTop ? 0 : insets.bottom,
        },
        style,
      ]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
        hidden={hideStatusBar}
      />
      {hasKeyboard ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      ) : (
        <>{children}</>
      )}
    </SafeAreaView>
  );
};

export default Container;
