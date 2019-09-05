import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

function BookDescription({label, description}) {
  return (
    <>
      <Text style={styles.descriptionName}>{label} </Text>
      <Text style={styles.descriptionData}>
        <Text>{description}</Text>
      </Text>
    </>
  );
}

export default BookDescription;

BookDescription.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
};

const styles = {
  descriptionName: {
    fontSize: 12,
    color: 'grey',
  },
  descriptionData: {
    fontSize: 14,
    marginBottom: 10,
  },
};
