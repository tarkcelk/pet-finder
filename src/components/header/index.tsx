import React from 'react';
import {$S_Header} from 'style/components';
import {View, Text} from 'elements';
import Button from '../button';
import {useNavigation, DrawerActions} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  hideTop?: boolean;
  pageTitle?: string;
  right?: boolean;
  showDrawer?: boolean;
};

const Header: React.FC<Props> = ({
  hideTop,
  pageTitle,
  right = true,
  showDrawer = false,
}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[$S_Header.container, hideTop && {paddingTop: insets.top}]}>
      <View style={[$S_Header.left]}>
        <Button
          icon={navigation.canGoBack() && !showDrawer ? 'angle-left' : 'bars'}
          onPress={() =>
            navigation.canGoBack() && !showDrawer
              ? navigation.goBack()
              : navigation.dispatch(DrawerActions.openDrawer())
          }
          noDefaultStyle
        />
      </View>
      {pageTitle && (
        <View style={[$S_Header.middle]}>
          <Text style={[$S_Header.pageTitle]}>{pageTitle}</Text>
        </View>
      )}
      {right && <View style={[$S_Header.right]}></View>}
    </View>
  );
};

export default Header;
