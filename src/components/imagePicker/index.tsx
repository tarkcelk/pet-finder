import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import {$S_ImagePicker} from 'style/components';
import Button from '../button';
import View from 'elements/view';
import {Validation as ValidationType} from 'types/components';
import {Validation} from 'components';

type Props = {
  placeholder: string;
  setImage?: (images: Asset) => void;
  validation?: ValidationType;
};
const ImagePicker: React.FC<Props> = ({placeholder, setImage, validation}) => {
  const [asset, setAsset] = useState<Asset>();

  const onPress = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    setAsset(result.assets?.[0]);
  };

  useEffect(() => {
    if (asset) setImage?.(asset);
  }, [asset]);

  return (
    <View style={$S_ImagePicker.container}>
      <Button
        title={placeholder}
        onPress={onPress}
        style={$S_ImagePicker.button}
        titleStyle={$S_ImagePicker.buttonTitleStyle}
        icon={'image'}
      />
      {asset && (
        <Image source={{uri: asset.uri}} style={[$S_ImagePicker.pickedImage]} />
      )}
      {validation && (
        <Validation message={validation.message} visible={validation.visible} />
      )}
    </View>
  );
};

export default ImagePicker;
