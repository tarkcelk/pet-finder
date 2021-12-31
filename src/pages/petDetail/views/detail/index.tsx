import React from 'react';
import {$PS_PetDetail} from 'style/pages';
import {View, Text, Icon} from 'elements';
import {Button} from 'components';
import {Linking} from 'react-native';
import {PetDto} from 'types/entity/pet';

type Props = {
  data: PetDto;
  handleAddToFavorites: () => void;
};
const Detail: React.FC<Props> = ({data, handleAddToFavorites}) => {
  return (
    <View style={$PS_PetDetail.petDetail}>
      <View style={$PS_PetDetail.petDetailTop}>
        <Text style={$PS_PetDetail.petDetailContentHeader}>{data.name}</Text>
        <Text style={$PS_PetDetail.petDetailContent}>
          <Icon name="clock-o" size={15} /> {data.age} yaşında
        </Text>
      </View>
      <View>
        <Text style={$PS_PetDetail.petDetailContent}>
          <Icon name="tag" size={15} /> {data.category}{' '}
          {data.subcategory && `- ${data.subcategory}`}
        </Text>
        <Text style={$PS_PetDetail.petDetailContent}>
          <Icon name="map" size={15} /> {data.city}
        </Text>
      </View>
      <View>
        <Text style={$PS_PetDetail.petDetailContentHeader}>Hakkında</Text>
        <Text style={$PS_PetDetail.petDetailContent}>{data.about}</Text>
      </View>
      <View>
        <Text style={$PS_PetDetail.petDetailContentHeader}>Sahibi</Text>
        <Text style={$PS_PetDetail.petDetailContent}>{data.owner}</Text>
      </View>
      <View style={$PS_PetDetail.petDetailBottomContainer}>
        <Button
          noDefaultStyle
          onPress={() => Linking.openURL(`tel:${data.phone_number}`)}>
          <Text
            style={[
              $PS_PetDetail.petDetailContentHeader,
              {textAlign: 'center'},
            ]}>
            <Icon name="phone" /> {data.phone_number}
          </Text>
        </Button>
        <Button noDefaultStyle onPress={handleAddToFavorites}>
          <Text
            style={[
              $PS_PetDetail.petDetailContentHeader,
              {textAlign: 'center'},
            ]}>
            <Icon name="heart" color={'red'} /> Favorilere Ekle
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Detail;
