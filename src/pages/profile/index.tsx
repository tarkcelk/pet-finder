import React from 'react';
import {useDispatch} from 'react-redux';
import {getCurrentRoute, navigate} from 'utils/navigation';
import {PageConfig} from 'types/pages';
import {SCREENS} from 'consts';
import {logout} from 'state/user/actions';
import {useFocusEffect} from '@react-navigation/core';

type Props = {};
const PageContainer: React.FC<Props> = props => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    if (getCurrentRoute()?.name === SCREENS.PROFILE) {
      dispatch(logout());
      navigate(SCREENS.HOME);
    }
  });

  return null;
};

const Page: PageConfig = {
  Name: SCREENS.PROFILE,
  PageContainer,
  DisplayName: 'Çıkış Yap',
  IconName: 'sign-out',
};

export default Page;
