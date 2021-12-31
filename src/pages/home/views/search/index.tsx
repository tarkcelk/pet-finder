import React from 'react';
import {Input} from 'components';
import {$PS_Home} from 'style/pages';

type Props = {
  text: string;
  onSearchTextChange: (value: string) => void;
};

const Search: React.FC<Props> = ({text, onSearchTextChange}) => {
  return (
    <Input
      value={text}
      onChangeText={onSearchTextChange}
      placeholderText={'Ara ..'}
      style={$PS_Home.searchInputContainer}
    />
  );
};

export default Search;
