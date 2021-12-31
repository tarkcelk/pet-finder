import React from 'react';
import {Pet as PetEntity} from 'types/entity/pet';
import {$PS_Publisheds} from 'style/pages';
import {Button} from 'components';

type Props = {
  pet: PetEntity;
  handleOnUnPublish: (pet: PetEntity) => void;
};
const PetSubView: React.FC<Props> = ({pet, handleOnUnPublish}) => {
  return (
    <Button
      title={pet.isInPublish ? 'Yayından Kaldır' : 'Yayına Al'}
      style={
        pet.isInPublish
          ? $PS_Publisheds.buttonContainer
          : {
              ...$PS_Publisheds.buttonContainer,
              ...$PS_Publisheds.unpublishedButton,
            }
      }
      onPress={() => handleOnUnPublish(pet)}
    />
  );
};

export default PetSubView;
