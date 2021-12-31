import React, {useCallback} from 'react';
import {Pets} from 'components/shared';
import {Container, Header} from 'components';
import {View} from 'elements';
import {SCREENS} from 'consts';
import {PageConfig} from 'types/pages';
import PetSubView from './view/PetSubView';
import {Pet as PetEntity} from 'types/entity/pet';
import {useAppSelector} from 'hooks/redux';
import {useDispatch} from 'react-redux';
import {fetchUserPublisheds, setPublishStatus} from 'state/pet/actions';
import {showAlert} from 'utils/app/alert';
import {useFocusEffect} from '@react-navigation/core';

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const {
    pet: {userPets},
    user: {
      data: {_id: userId},
    },
  } = useAppSelector(state => state);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUserPublisheds(userId));
    }, []),
  );

  const handleOnUnPublish = (pet: PetEntity) => {
    showAlert(
      'Uyarı',
      'İlanınız güncellenecek , emin misiniz ?',
      {
        onPress: () => {
          pet.isInPublish = !pet.isInPublish;
          dispatch(setPublishStatus(pet));
          dispatch(fetchUserPublisheds(userId));
        },
        text: 'Evet',
      },
      {text: 'Hayır'},
    );
  };

  return (
    <Container>
      <Header pageTitle="İlanlarım" showDrawer />
      <View>
        <Pets
          pets={userPets}
          petRenderItem={(pet: PetEntity) => (
            <PetSubView pet={pet} handleOnUnPublish={handleOnUnPublish} />
          )}
          vertical
        />
      </View>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.PUBLISHEDS,
  PageContainer,
  DisplayName: 'İlanlarım',
};

export default Page;
