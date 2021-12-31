import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {
  Container,
  Input,
  Button,
  Spinner,
  Validation,
  Header,
} from 'components';
import {Picker} from 'elements';
import {STATIC_TEXTS, SCREENS} from 'consts';
import {$S_ImageBackground} from 'style/elements';
import {$S_Button} from 'style/components';
import {$PS_SignIn} from 'style/pages';
import {PageConfig} from 'types/pages';
import {navigate} from 'utils/navigation';
import {useDispatch} from 'react-redux';
import {createUser, createUserEnded, fetchCities} from 'state/user/actions';
import {useAppSelector} from 'hooks/redux';
import {useValidation} from 'react-native-form-validator';
import {getValidationObject} from 'utils/app/validation';
import {User} from 'types/entity';
import {View} from 'elements';
import {showAlert} from 'utils/app/alert';

const {SIGN_UP: $SU} = STATIC_TEXTS;

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const {cities, userPending, error, userCreated} = useAppSelector(
    state => state.user,
  );
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState(0);

  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {name, surname, email, phoneNumber, password, city},
    deviceLocale: 'tr',
    labels: {
      name: 'Ad',
      surname: 'Soyad',
      email: 'Email',
      phoneNumber: 'Telefon numarası',
      password: 'Şifre',
      city: 'Yaşadığınız Yer',
    },
  });

  const validationMethods = {isFieldInError, getErrorsInField};

  const redirectToSignIn = () => navigate(SCREENS.SIGN_IN);

  const handleSignup = () => {
    const isValid = validate({
      name: {minLength: 2, required: true},
      surname: {minLength: 2, required: true},
      email: {email: true, required: true},
      phoneNumber: {minLength: 11, maxLength: 12, required: true},
      password: {numbers: true, minLength: 6, maxLength: 24, required: true},
      city: {minLength: 0, numbers: true, required: true},
    });

    if (isValid) {
      const user: User = {
        name,
        surname,
        email,
        password,
        phone_number: phoneNumber,
        city_id: city,
      };
      dispatch(createUser(user));
    }
  };

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  useEffect(() => {
    if (userCreated)
      showAlert(
        'Başarılı',
        `Kullanıcı kaydınız başarılı bir şekilde yapılmıştır , lütfen giriş yapınız.`,
        {
          onPress: () => {
            navigate(SCREENS.SIGN_IN);
            dispatch(createUserEnded());
          },
          text: 'Tamam',
        },
      );
  }, [userCreated]);

  return (
    <Container hideTop hasKeyboard>
      <ImageBackground
        style={$S_ImageBackground.imageBackground}
        source={require('assets/images/signup-pets.png')}>
        <Header hideTop />
        <View style={$S_ImageBackground.content}>
          <Input
            placeholderText={$SU.NAME}
            value={name}
            onChangeText={setName}
            validation={getValidationObject('name', validationMethods)}
          />
          <Input
            placeholderText={$SU.SURNAME}
            value={surname}
            onChangeText={setSurname}
            validation={getValidationObject('surname', validationMethods)}
          />
          <Input
            placeholderText={$SU.EMAIL_ADDRESS}
            value={email}
            onChangeText={setEmail}
            validation={getValidationObject('email', validationMethods)}
            keyboardType={'email-address'}
          />
          <Input
            placeholderText={$SU.PHONE_NUMBER}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            validation={getValidationObject('phoneNumber', validationMethods)}
            keyboardType={'phone-pad'}
          />
          <Picker
            items={cities}
            onValueChange={(value: any, index: number) => setCity(value)}
            placeholder={$SU.LIVING_PLACE}
            validation={getValidationObject('city', validationMethods)}
          />
          <Input
            placeholderText={$SU.PASSWORD}
            value={password}
            onChangeText={setPassword}
            validation={getValidationObject('password', validationMethods)}
            password
          />
          <Validation message={error} visible={!!error} />
          <Button
            style={$S_Button.button}
            title={$SU.SIGN_UP}
            titleStyle={$S_Button.text}
            onPress={handleSignup}
          />
        </View>
        <Button
          style={$PS_SignIn.signUpButton}
          titleStyle={$PS_SignIn.signUpButtonText}
          title={$SU.SIGN_IN}
          onPress={redirectToSignIn}
          noDefaultStyle
        />
        <Spinner visible={userPending} />
      </ImageBackground>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.SIGN_UP,
  PageContainer,
  DisplayName: 'Kayıt Ol',
};

export default Page;
