import React from 'react';
import {ImageBackground} from 'react-native';
import {Text, View} from 'elements';
import {Pet as PetEntity} from 'types/entity/pet';
import {$SS_Pet} from 'style/components/shared';
import Button from '../../button';
import {SCREENS} from 'consts';
import {navigate} from 'utils/navigation';
import {BASE_IMAGE_URL} from 'consts/urls';

type Props = {
  data: PetEntity;
};

const Pet: React.FC<Props> = ({data}) => {
  return (
    <View style={$SS_Pet.container}>
      <Button
        noDefaultStyle
        onPress={() => navigate(SCREENS.PET_DETAIL, {petId: data._id})}>
        <ImageBackground
          source={
            data.imageUri
              ? {uri: BASE_IMAGE_URL + data.imageUri}
              : require('assets/images/dog.png')
          }
          style={$SS_Pet.imageContainer}
          imageStyle={$SS_Pet.containerImage}>
          <Text style={$SS_Pet.text}>{data.name}</Text>
          <Text style={$SS_Pet.text}>{`${data.age} yaşında`}</Text>
          <Text style={[$SS_Pet.text, {position: 'absolute', right: 5}]}>
            {data.createDate}
          </Text>
        </ImageBackground>
      </Button>
    </View>
  );
};

export default Pet;
