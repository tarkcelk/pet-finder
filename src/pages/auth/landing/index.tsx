import React from 'react';
import {Text, View, ImageBackground} from 'elements';
import {Container, Button} from 'components';
import {SCREENS, STATIC_TEXTS} from 'consts';
import {$PS_Landing} from 'style/pages';
import {PageConfig} from 'types/pages';
import {navigate} from 'utils/navigation';

const {LANDING: $L} = STATIC_TEXTS;

type Props = {};
const PageContainer: React.FC<Props> = () => {
  const redirectToHome = () => navigate(SCREENS.HOME);

  return (
    <Container hideTop>
      <ImageBackground
        source={require('assets/images/landing-pet.png')}
        style={$PS_Landing.imageContainer}>
        <View style={$PS_Landing.upperView}>
          <Text style={$PS_Landing.title}>{$L.WELCOME}</Text>
          <Text style={$PS_Landing.title}>{$L.HAVE_A_FRIEND}</Text>
        </View>
        <View style={$PS_Landing.bottomView}>
          <Button
            style={$PS_Landing.bottomButton}
            onPress={redirectToHome}
            titleStyle={$PS_Landing.title}
            title={$L.LETS_GET_STARTED}
            noDefaultStyle
          />
        </View>
      </ImageBackground>
    </Container>
  );
};

const Page: PageConfig = {
  Name: SCREENS.LANDING,
  PageContainer,
  DisplayName: 'Giriş Sayfası',
};

export default Page;
