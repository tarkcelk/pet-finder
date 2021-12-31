import React from 'react';
import {Pet as PetEntity} from 'types/entity/pet';
import Pet from '../pet';
import {View} from 'elements';
import {FlatList} from 'react-native';

type Props = {
  pets: PetEntity[];
  vertical?: boolean;
  petRenderItem?: React.FC<any>;
};

const Pets: React.FC<Props> = ({pets, vertical, petRenderItem}) => {
  return (
    <FlatList
      data={pets}
      renderItem={({item}) => (
        <View style={{alignItems: 'center'}}>
          <Pet data={item} />
          {petRenderItem?.(item)}
        </View>
      )}
      horizontal={!vertical}
      contentContainerStyle={vertical && {paddingBottom: 200}}
    />
  );
};

export default Pets;
