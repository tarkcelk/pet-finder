import React from 'react';
import {ScrollView, View} from 'elements';
import {Button} from 'components';
import {$PS_Home} from 'style/pages';
import {Category} from 'types/entity/pet';

type Props = {
  categories: Category[];
  onCategorySelect: (value: number) => void;
  selectedCategoryValue: number;
};

const Categories: React.FC<Props> = ({
  categories,
  onCategorySelect,
  selectedCategoryValue,
}) => {
  return (
    <View>
      <ScrollView style={$PS_Home.categories} horizontal scrollEnabled>
        {categories?.map(category => (
          <Button
            key={category.value}
            title={category.label}
            style={[
              $PS_Home.categoriesButtonContainer,
              selectedCategoryValue === category.value &&
                $PS_Home.selectedCategoryButtonContainer,
            ]}
            titleStyle={$PS_Home.categoriesButtonTitle}
            noDefaultStyle
            onPress={() => onCategorySelect(category.value)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
