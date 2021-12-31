import React, {useState} from 'react';
import {
  ImageBackground as NativeImageBackground,
  Image as NativeImage,
} from 'react-native';
import {$PS_PetDetail} from 'style/pages';
import {View} from 'elements';
import {Button, Modal, Header} from 'components';
import {PetDto} from 'types/entity/pet';
import {BASE_IMAGE_URL} from 'consts/urls';

type Props = {
  data: PetDto;
};
const Image: React.FC<Props> = ({data}) => {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  return (
    <View style={$PS_PetDetail.petImageContainer}>
      <Button
        noDefaultStyle
        onPress={() => setImageModalVisible(!imageModalVisible)}>
        <NativeImageBackground
          source={
            data.image_uri
              ? {uri: BASE_IMAGE_URL + data.image_uri}
              : require('assets/images/landing-pet.png')
          }
          style={$PS_PetDetail.petImage}>
          <Header hideTop />
        </NativeImageBackground>
      </Button>

      <Modal
        visible={imageModalVisible}
        onClose={() => setImageModalVisible(false)}>
        <NativeImage
          source={
            data.image_uri
              ? {uri: BASE_IMAGE_URL + data.image_uri}
              : require('assets/images/landing-pet.png')
          }
          style={$PS_PetDetail.petImageOnModal}
        />
      </Modal>
    </View>
  );
};

export default Image;
