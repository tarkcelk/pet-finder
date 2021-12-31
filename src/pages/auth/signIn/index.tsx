import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {
  Container,
  Input,
  Button,
  Spinner,
  Header,
  Validation,
} from 'components';
import {STATIC_TEXTS, SCREENS} from 'consts';
import {$S_ImageBackground} from 'style/elements';
import {$S_Button} from 'style/components';
import {$PS_SignIn} from 'style/pages';
import {PageConfig} from 'types/pages';
import {navigate} from 'utils/navigation';
import {useDispatch} from 'react-redux';
import {login} from 'state/user/actions';
import {useValidation} from 'react-native-form-validator';
import {getValidationObject} from 'utils/app/validation';
import {useAppSelector} from 'hooks/redux';
import {View} from 'elements';

const {SIGN_IN: $SI} = STATIC_TEXTS;

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const {userPending, error} = useAppSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {email, password},
    deviceLocale: 'tr',
    labels: {
      email: 'Email',
      password: 'Şifre',
    },
  });

  const validationMethods = {isFieldInError, getErrorsInField};

  const redirectToSignUp = () => navigate(SCREENS.SIGN_UP);

  const handleLogin = () => {
    const isValid: boolean = validate({
      email: {email: true, required: true},
      password: {minlength: 6, maxlength: 24, required: true},
    });
    if (isValid) dispatch(login(email, password));
  };

  return (
    <Container hideTop>
      <ImageBackground
        style={[$S_ImageBackground.imageBackground, {}]}
        source={require('assets/images/sign-in-pet.png')}>
        <Header hideTop showDrawer />
        <View style={$S_ImageBackground.content}>
          <Input
            placeholderText={$SI.EMAIL_ADDRESS}
            value={email}
            onChangeText={setEmail}
            validation={getValidationObject('email', validationMethods)}
            keyboardType={'email-address'}
          />
          <Input
            placeholderText={$SI.PASSWORD}
            value={password}
            onChangeText={setPassword}
            validation={getValidationObject('password', validationMethods)}
            password
          />
          <Validation message={error} visible={!!error} />
          <Button
            style={$S_Button.button}
            title={$SI.SIGN_IN}
            titleStyle={$S_Button.text}
            onPress={handleLogin}
          />
        </View>

        <Button
          style={$PS_SignIn.signUpButton}
          titleStyle={$PS_SignIn.signUpButtonText}
          title={$SI.SIGN_UP}
          onPress={redirectToSignUp}
          noDefaultStyle
        />
      </ImageBackground>
      <Spinner visible={userPending} />
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.SIGN_IN,
  PageContainer,
  DisplayName: 'Giriş Yap',
  IconName: 'user',
};

export default Page;
