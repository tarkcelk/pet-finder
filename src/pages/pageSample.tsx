import React from 'react';
import {View, Text} from 'react-native';
import {PageConfig} from 'types/pages';

type Props = {};
const PageContainer: React.FC<Props> = props => {
  return (
    <View>
      <Text>Sample</Text>
    </View>
  );
};

const Page: PageConfig = {
  Name: 'Sample',
  PageContainer,
  DisplayName: 'Sample',
  IconName: 'sample',
};

export default Page;
