import React from 'react';
import {Text} from 'react-native';

function BookDescription({label, description, value}) {
  return (
    <>
      <Text style={styles.descriptionName}>{label} </Text>
      <Text style={styles.descriptionData}>
        {typeof description != 'string' ? (
          description.map((d, i) => {
            console.log(d);
            return <Text key={i}>{d[`${value}`]}</Text>;
          })
        ) : (
          <Text>{description}</Text>
        )}
      </Text>
    </>
  );
}

export default BookDescription;

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
