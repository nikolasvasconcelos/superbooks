import React, {useState} from 'react';
import {TextInput, Keyboard} from 'react-native';

function SearchInput({searchHandler}) {
  const [searchValue, setSearch] = useState('');

  function submitSearch() {
    searchHandler(searchValue);
    Keyboard.dismiss();
  }

  return (
    <TextInput
      style={styles.input}
      value={searchValue}
      onChangeText={setSearch}
      onSubmitEditing={submitSearch}
      placeholder="Pesquisar livro por título, autor ou ISBN"
    />
  );
}

export default SearchInput;

const styles = {
  input: {
    height: 35,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    textAlign: 'center',
  },
};
