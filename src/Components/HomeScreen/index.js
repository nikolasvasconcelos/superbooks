import React, {useReducer} from 'react';
import {View, Text} from 'react-native';

import {Header} from '../Shared';
import SearchBooks from './SearchBooks';
import BooksList from './BooksList';

function Home({books, totalOfBooks, requestBooks, navigation, getBookById}) {
  const [filters, setFilters] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {},
  );

  return (
    <View style={styles.container}>
      <SearchBooks setFilters={setFilters} searchHandler={requestBooks} />
      {totalOfBooks > 0 && (
        <Text style={styles.totalFound}>Encontrados: {totalOfBooks}</Text>
      )}
      <BooksList
        getBookById={getBookById}
        navigate={navigation.navigate}
        {...filters}
        books={books}
      />
    </View>
  );
}

Home.navigationOptions = {header: <Header />};

export default Home;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  totalFound: {
    marginTop: 15,
    marginHorizontal: 15,
    fontSize: 12,
    textAlign: 'center',
  },
};
