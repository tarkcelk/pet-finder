import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Picker, ImageBackground} from 'elements';
import {
  Button,
  Container,
  Header,
  Input,
  ImagePicker,
  Spinner,
} from 'components';
import {SCREENS} from 'consts';
import {PageConfig} from 'types/pages';
import {$PS_Publish} from 'style/pages';
import {Asset} from 'react-native-image-picker';
import {useValidation} from 'react-native-form-validator';
import {useDispatch} from 'react-redux';
import {
  createPet,
  fetchCategories,
  fetchSubCategories,
} from 'state/pet/actions';
import {useAppSelector} from 'hooks/redux';
import {getValidationObject} from 'utils/app/validation';
import {Pet} from 'types/entity/pet';

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const scrollRef = useRef<any>();
  const dispatch = useDispatch();
  const {categories, subCategories, petPending} = useAppSelector(
    state => state.pet,
  );
  const {data: {_id: userId = 0} = {}} = useAppSelector(state => state.user);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubCategory] = useState('');
  const [age, setAge] = useState('');
  const [about, setAbout] = useState(``);
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<Asset>();
  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {name, category, subcategory, age, about, image},
    deviceLocale: 'tr',
    labels: {
      name: 'Ad',
      category: 'Tür',
      age: 'Yaş',
      about: 'Hakkında',
      image: 'Fotoğraf',
    },
  });

  const validationMethods = {isFieldInError, getErrorsInField};

  useEffect(() => {
    if (image) scrollRef.current?.scrollToEnd();
  }, [image, scrollRef]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const onCategoryChange = (categoryId: number) => {
    setCategory(categoryId?.toString());
    dispatch(fetchSubCategories(categoryId));
    setSubCategory('');
  };

  const onImageSet = (img: Asset) => {
    setImage(img.fileName!);
    setImageFile(img);
  };

  const onPublish = () => {
    const isValid = validate({
      name: {required: true, minlength: 2},
      category: {required: true, numbers: true},
      age: {required: true, numbers: true},
      about: {required: true, minlength: 11},
      image: {required: true, minlength: 1},
    });

    if (isValid) {
      let petFormData = new FormData();
      const pet: Pet = {
        name,
        category,
        subcategory,
        age: parseInt(age),
        about,
        userId,
      };
      const image = {
        uri: imageFile?.uri,
        type: imageFile?.type,
        name: imageFile?.fileName,
      };
      petFormData.append('file', image);
      petFormData.append('pet', JSON.stringify(pet));
      dispatch(createPet(petFormData));
    }
  };

  return (
    <Container hideTop>
      <ImageBackground
        source={require('assets/images/publish-pet.png')}
        style={$PS_Publish.imageContainer}>
        <Header hideTop pageTitle="İlan Ver" />

        <ScrollView svRef={scrollRef}>
          <Input
            value={name}
            onChangeText={setName}
            placeholderText={'Adı'}
            validation={getValidationObject('name', validationMethods)}
          />
          <Picker
            items={categories}
            onValueChange={value => onCategoryChange(value)}
            placeholder={'Türü'}
            validation={getValidationObject(
              'category',
              validationMethods,
              '"Tür" alanı gereklidir',
            )}
          />
          <Picker
            items={subCategories}
            onValueChange={value => setSubCategory(value)}
            placeholder={'Cinsi'}
            selectedValue={subcategory}
          />
          <Input
            value={age}
            onChangeText={setAge}
            placeholderText={'Yaşı'}
            keyboardType={'numeric'}
            validation={getValidationObject('age', validationMethods)}
          />
          <Input
            value={about}
            onChangeText={setAbout}
            placeholderText={'Hakkında'}
            textArea
            validation={getValidationObject('about', validationMethods)}
          />
          <ImagePicker
            placeholder={'Fotoğraf Yükle'}
            setImage={onImageSet}
            validation={getValidationObject(
              'image',
              validationMethods,
              '"Fotoğraf" alanı gereklidir',
            )}
          />
        </ScrollView>
        <Button title="Yayınla" onPress={onPublish} />
        <Spinner visible={petPending} />
      </ImageBackground>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.PUBLISH,
  PageContainer,
  DisplayName: 'İlan Ver',
};

export default Page;
