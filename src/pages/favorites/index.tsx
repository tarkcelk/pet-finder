import React, {useCallback} from 'react';
import {PageConfig} from 'types/pages';
import {Container, Header} from 'components';
import {Pets} from 'components/shared';
import {SCREENS} from 'consts';
import {useAppSelector} from 'hooks/redux';
import {useFocusEffect} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {getFavorites} from 'state/pet/actions';

type Props = {};
const PageContainer: React.FC<Props> = props => {
  const {
    pet: {favorites},
    user: {
      data: {_id: userId},
    },
  } = useAppSelector(state => state);
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(getFavorites(userId));
    }, []),
  );
  return (
    <Container>
      <Header pageTitle={'Favorilerim'} showDrawer />
      <Pets pets={favorites} vertical />
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.FAVORITES,
  PageContainer,
  DisplayName: 'Favoriler',
  IconName: 'heart',
};

export default Page;
