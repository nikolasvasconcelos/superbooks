import React from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';

function DateWrapper({dateValue, setDate, placeholder}) {
  return (
    <DatePicker
      style={styles.datePicker}
      locale="pt-BR"
      date={dateValue}
      mode="date"
      androidMode="calendar"
      placeholder={placeholder}
      format="DD/MM/YYYY"
      minDate="01/01/1960"
      maxDate={moment().format('DD/MM/YYYY')}
      confirmBtnText="Confirmar"
      cancelBtnText="Cancelar"
      customStyles={{
        btnTextConfirm: {color: '#EA7137'},
        dateInput: {
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: '#ddd',
          marginRight: 3,
        },
      }}
      iconComponent={<FontAwesomeIcon icon={['far', 'calendar-alt']} />}
      onDateChange={date => setDate(date)}
    />
  );
}

export default DateWrapper;

DateWrapper.propTypes = {
  dateValue: PropTypes.string,
  setDate: PropTypes.func,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  input: {
    height: 35,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginTop: 3,
    textAlign: 'center',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
  },
  datePicker: {
    width: 100,
    marginHorizontal: 5,
  },
  datePickerInput: {
    height: 30,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
