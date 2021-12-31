import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'elements';
import {Button, Container, Header, Spinner} from 'components';
// import {Pets} from 'components/shared';
import {Pets} from 'components/shared';
import {SCREENS} from 'consts';
import {PageConfig} from 'types/pages';
import {$PS_Home} from 'style/pages';
import {Categories, Search} from './views';
import {navigate} from 'utils/navigation';
import {useAppSelector} from 'hooks/redux';
import {useDispatch} from 'react-redux';
import {fetchCategories, fetchPets} from 'state/pet/actions';
import {useFocusEffect} from '@react-navigation/core';

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const {
    user: {data: user},
    pet: {categories, list, petPending},
  } = useAppSelector(state => state);
  const [filteredCategory, setFilteredCategory] = useState(0);
  const [filteredSearchText, setFilteredSearchText] = useState('');

  const onPublishPress = () => {
    if (user?._id) return navigate(SCREENS.PUBLISH);
    navigate(SCREENS.AUTH);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  useEffect(() => {
    setPets();
  }, [filteredSearchText, filteredCategory]);

  useFocusEffect(
    useCallback(() => {
      setPets();
    }, []),
  );

  const setPets = () =>
    dispatch(fetchPets({filteredSearchText, filteredCategory}));

  return (
    <Container>
      <Header showDrawer />
      <View style={$PS_Home.container}>
        <Text style={$PS_Home.title}>Bir arkadaş bağışla</Text>
        <Search
          text={filteredSearchText}
          onSearchTextChange={setFilteredSearchText}
        />
        <Categories
          categories={categories}
          onCategorySelect={value =>
            setFilteredCategory(filteredCategory === value ? 0 : value)
          }
          selectedCategoryValue={filteredCategory}
        />
        <Pets pets={list} />
        <Button
          title="İlan Ver"
          style={$PS_Home.publishButtonContainer}
          onPress={onPublishPress}
        />
        <Spinner visible={petPending} />
      </View>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.HOME,
  PageContainer,
  DisplayName: 'Anasayfa',
  IconName: 'home',
};

export default Page;
