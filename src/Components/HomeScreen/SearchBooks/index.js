import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import DatePicker from './DatePickerWrapper';
import SearchInput from './SearchInput';

function SearchBooks({searchHandler, setFilters}) {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    setFilters({
      from: dateFrom,
      to: dateTo,
    });
  }, [dateFrom, dateTo, setFilters]);

  return (
    <View>
      <SearchInput searchHandler={searchHandler} />
      <View style={styles.filter}>
        <Text>Publicados desde</Text>
        <DatePicker
          dateValue={dateFrom}
          setDate={setDateFrom}
          placeholder="Desde"
        />
        <Text>até</Text>
        <DatePicker dateValue={dateTo} setDate={setDateTo} placeholder="Até" />
      </View>
    </View>
  );
}

export default SearchBooks;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
  },
};
