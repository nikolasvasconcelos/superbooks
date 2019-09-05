import React from 'react';
import {View} from 'react-native';

function EmptyItem() {
  return <View style={styles.container} />;
}

export default EmptyItem;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 175,
  },
};
