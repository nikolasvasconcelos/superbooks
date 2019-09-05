import React from 'react';
import {FlatList} from 'react-native';
import moment from 'moment';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import EmptyItem from './EmptyItem';

function BooksList({books, from, to, navigate, getBookById}) {
  function _keyExtractor(item) {
    return item.id;
  }

  function renderItem({item}) {
    return (
      <ListItem
        getBookById={getBookById}
        navigate={navigate}
        id={item.id}
        {...item.volumeInfo}
      />
    );
  }

  const data = books.filter(book => {
    if (from && moment(book.volumeInfo.publishedDate) < moment(from)) {
      return false;
    }
    if (to && moment(book.volumeInfo.publishedDate) > moment(to)) {
      return false;
    }
    return true;
  });

  return (
    <FlatList
      data={data || []}
      ListEmptyComponent={<EmptyItem />}
      keyExtractor={_keyExtractor}
      alwaysBounceVertical
      ListHeaderComponent={<ListHeader />}
      renderItem={renderItem}
      style={styles.list}
    />
  );
}

export default BooksList;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  list: {
    display: 'flex',
    flex: 1,
    marginTop: 30,
  },
};
