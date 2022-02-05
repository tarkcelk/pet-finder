import React, {useEffect} from 'react';
import {SCREENS} from 'consts';
import {PageConfig} from 'types/pages';
import {Container, Header, Spinner} from 'components';
import {$PS_PetDetail} from 'style/pages';
import {View} from 'elements';
import {Detail, Image} from './views';
import {useDispatch} from 'react-redux';
import {addToFavorites, fetchPetDetail} from 'state/pet/actions';
import {useAppSelector} from 'hooks/redux';
import {useRoute} from '@react-navigation/core';
import {navigate} from 'utils/navigation';

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const {
    params: {petId},
  } = useRoute();
  const {
    pet: {detail, petPending},
    user: {data},
  } = useAppSelector(state => state);

  useEffect(() => {
    dispatch(fetchPetDetail(petId));
  }, []);

  const handleAddToFavorites = () => {
    if (!data?._id) return navigate(SCREENS.AUTH);
    dispatch(addToFavorites(petId, data._id));
  };

  return (
    <Container>
      <Header />
      <View style={$PS_PetDetail.container}>
        <Image data={detail} />
        <Detail data={detail} handleAddToFavorites={handleAddToFavorites} />
        <Spinner visible={petPending} />
      </View>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.PET_DETAIL,
  PageContainer,
  DisplayName: 'Pet Detay',
};

export default Page;
