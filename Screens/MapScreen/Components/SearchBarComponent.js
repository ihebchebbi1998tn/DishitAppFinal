import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBarComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    onSearch?.(text);
  };

  return (
    <Searchbar
      placeholder="Search for meals or NGOs..."
      onChangeText={handleSearch}
      value={searchQuery}
      style={styles.searchBar}
      iconColor="#893571"
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 8,
    backgroundColor: '#EFEFEF',
    elevation: 0,
    marginBottom: 20,
  },
});

export default SearchBarComponent;
